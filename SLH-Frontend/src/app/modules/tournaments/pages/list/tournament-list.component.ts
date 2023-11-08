import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Dropdowndata } from "app/core/models/global.model";
import { TableTournamentData } from "../../_core/model/model";
import { TournamentService } from "../../tournament.service";
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2';
import { UtilityService } from "app/core/services/utility.service";

@Component({
    selector: 'tournament-list',
    templateUrl: './tournament-list.component.html'
})

export class TournamentListComponent implements OnInit {
    isDataLoaded = false;

    public rowsOnPage = 5;
    public filterQuery = '';

    public rows: Dropdowndata[] = [
        { id: 1, name: '5' },
        { id: 2, name: '10' },
        { id: 3, name: '25' },
        { id: 4, name: '50' }
    ];
    selrow;

    lstTournaments: TableTournamentData[];
    tabledata;
    page = 1;
    perPage = 5
    totalCount;

    currUserId = UtilityService.getLocalStorage('id');
    currUserRole = UtilityService.getLocalStorage('role');

    constructor(
        private router: Router,
        private tournament: TournamentService,
        private toast: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.setDefaultData();
        this.getTournaments();
    }

    setDefaultData() {
        this.lstTournaments = new Array<TableTournamentData>();
        this.selrow =  {
            id: 1,
            name: '5'
        };
        this.rowsOnPage = this.selrow.name;
    }

    getTournaments() {
        this.isDataLoaded = false;
        const queryParams = this.getObject();
        this.tournament.getTournaments(queryParams).subscribe(res => {
            this.setTeams(res.body.item)
        }, error => {
            this.toast.error(error.message);
            if (error.status === 401) {
                this.router.navigate(['/auth/login']);
            }
        });
    }

    setTeams(data) {
        this.lstTournaments = [];
        data.forEach((obj, i) => {
            // if (i === 0) {
            //     this.totalCount = obj.totalCount ;
            // } 
            this.lstTournaments.push({
                id: obj.id,
                name: obj.name,
                organizerId: obj.organizerId,
                organizerName: (obj.firstName + obj.lastName),
                sportId: obj.sportId,
                sportName: obj.sportName,
                firstName: obj.firstName,
                lastName: obj.lastName,
                endDate: obj.endDate,
                startDate: obj.startDate
            });
            this.totalCount = this.lstTournaments.length;
        });
        this.setFooter();
        this.isDataLoaded = true;
    }

    onRowsChange(data) {
        this.perPage = data.name;
        this.rowsOnPage = data.name;
        this.getTournaments();
    }

    searchSports() {
        this.getTournaments();
    }

    onSportDetails(userId) {
        this.router.navigate([`/sport/${userId}/detail`]);
    }

    onPageSetUP(type) {
        switch(type) {
            case 'first':
                this.page = 1;
                this.getTournaments();
                break;
            case 'prev':
                this.page = (this.page > 1) ? this.page - 1 : 1;
                this.getTournaments();
                break;
            case 'next':
                this.page = this.page + 1;
                this.getTournaments();
                break;
            case 'last':
                let last = (
                    (parseInt(this.totalCount.toString(), 10)) / (parseInt(this.perPage.toString(), 10))
                );
                last = parseInt(last.toString(), 10);
                this.page = last;
                this.getTournaments();
                break;
            default:
                break;
        }
    }

    setFooter() {
        let from, to;
        if (this.page === 1) {
            from = 1;
            to = this.totalCount > this.perPage ? this.perPage : this.totalCount;
        } else {
            if (this.totalCount > ((this.perPage * this.page) + this.perPage)) {
                from = (this.perPage * this.page) + 1;
                to = (this.perPage * this.page) + this.perPage;
            } else {
                from = (this.perPage * this.page) + 1;
                to = this.totalCount
            }
        }
        const prev_url = (this.page !== 1);
        const next_url = (to < this.totalCount);
        this.tabledata = {
            from: from,
            to: to,
            total: this.totalCount,
            prev_page_url: prev_url,
            current_page: this.page,
            next_page_url: next_url
        }
    }

    getObject() {
        let obj = {};
        let organizerId = (this.currUserRole.toString() === '1') ? 0 : parseInt(this.currUserId);
        Object.assign(obj, {
            SearchStr: this.filterQuery,
            PageNo: this.page,
            PageSize: this.perPage,
            OrganizerId: organizerId
        });
        return obj;
    }

    deleteTournament(id) {
        Swal.fire('Warning', 'Are you sure want to delete tournament?')
            .then(result => {
                if (result.value) {
                    const request = {
                        id: id
                    };
                    this.tournamentDelete(request);
                }
            });
        // fire({
        //     title: 'Are you sure want to delete sport?',
        //     type: 'info',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete!!',
        // }).then((result) => {
        //     if (result.value) {
        //         const request = {
        //             id: id
        //         };
        //         this.sportDelete(request);
        //     }
        // });
    }

    tournamentDelete(request) {
        this.tournament.tournamentDelete(request).subscribe(res => {
            this.getTournaments();
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['/auth/login']);
            }
        });
    }
}