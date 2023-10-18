import { Component, OnInit } from "@angular/core";
import { Dropdowndata } from "app/core/models/global.model";
import { TableTeamData } from "../../_core/model/model";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { TeamService } from "../../team.service";
import Swal from 'sweetalert2';

@Component({
    selector: 'team-list',
    templateUrl: './team-list.component.html'
})

export class TeamListComponent implements OnInit {
    
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

    lstTeams: TableTeamData[];
    tabledata;
    page = 1;
    perPage = 5
    totalCount;

    constructor(
        private router: Router,
        private team: TeamService,
        private toast: ToastrService,
    ) {
    }

    
    ngOnInit(): void {
        this.setDefaultData();
        this.getTeams();
    }

    setDefaultData() {
        this.lstTeams = new Array<TableTeamData>();
        this.selrow =  {
            id: 1,
            name: '5'
        };
        this.rowsOnPage = this.selrow.name;
    }

    getTeams() {
        this.isDataLoaded = false;
        const queryParams = this.getObject();
        this.team.getTeams(queryParams).subscribe(res => {
            this.setTeams(res.body.item)
        }, error => {
            this.toast.error(error.message);
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }

    setTeams(data) {
        this.lstTeams = [];
        data.forEach((obj, i) => {
            // if (i === 0) {
            //     this.totalCount = obj.totalCount ;
            // } 
            this.lstTeams.push({
                id: obj.id,
                name: obj.name,
                country: obj.country,
                ownerId: obj.ownerId,
                ownerName: obj.ownerName,
                sportId: obj.sportId,
                sportName: obj.sportName,
            });
            this.totalCount = this.lstTeams.length;
        });
        this.setFooter();
        this.isDataLoaded = true;
    }

    onRowsChange(data) {
        this.perPage = data.name;
        this.rowsOnPage = data.name;
        this.getTeams();
    }

    searchSports() {
        this.getTeams();
    }

    onSportDetails(userId) {
        this.router.navigate([`/sport/${userId}/detail`]);
    }

    onPageSetUP(type) {
        switch(type) {
            case 'first':
                this.page = 1;
                this.getTeams();
                break;
            case 'prev':
                this.page = (this.page > 1) ? this.page - 1 : 1;
                this.getTeams();
                break;
            case 'next':
                this.page = this.page + 1;
                this.getTeams();
                break;
            case 'last':
                let last = (
                    (parseInt(this.totalCount.toString(), 10)) / (parseInt(this.perPage.toString(), 10))
                );
                last = parseInt(last.toString(), 10);
                this.page = last;
                this.getTeams();
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
        Object.assign(obj, {
            SearchStr: this.filterQuery,
            PageNo: this.page,
            PageSize: this.perPage
        });
        return obj;
    }

    deleteTeam(id) {
        Swal.fire('Warning', 'Are you sure want to delete team?')
            .then(result => {
                if (result.value) {
                    const request = {
                        id: id
                    };
                    this.teamDelete(request);
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

    teamDelete(request) {
        this.team.teamDelete(request).subscribe(res => {
            this.getTeams();
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }
}