import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Dropdowndata } from "app/core/models/global.model";
import Swal from 'sweetalert2';
import { MatchService } from "../../match.service";
import { ToastrService } from "ngx-toastr";
import { TableMatchData } from "../../_core/models/model";

@Component({
    selector: 'match-list',
    templateUrl: './match-list.component.html'
})

export class MatchListComponent implements OnInit {
    
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

    lstMatches: TableMatchData[];
    tabledata;
    page = 1;
    perPage = 5
    totalCount;

    constructor(
        private router: Router,
        private match: MatchService,
        private toast: ToastrService,
    ) {
    }

    
    ngOnInit(): void {
        this.setDefaultData();
        this.getMatches();
    }

    setDefaultData() {
        this.lstMatches = new Array<TableMatchData>();
        this.selrow =  {
            id: 1,
            name: '5'
        };
        this.rowsOnPage = this.selrow.name;
    }

    getMatches() {
        this.isDataLoaded = false;
        const queryParams = this.getObject();
        this.match.getMatches(queryParams).subscribe(res => {
            this.setMatches(res.body.item)
        }, error => {
            this.toast.error(error.message);
            if (error.status === 401) {
                this.router.navigate(['/auth/login']);
            }
        });
    }

    setMatches(data) {
        this.lstMatches = [];
        data.forEach((obj, i) => {
            // if (i === 0) {
            //     this.totalCount = obj.totalCount ;
            // } 
            this.lstMatches.push({
                id: obj.id,
                team1: obj.team1,
                team1Name: obj.team1Name,
                team2: obj.team2,
                team2Name: obj.team2Name,
                tournamentId: obj.tournamentId,
                tournamentName: obj.tournamentName,
                tournamentVenueId: obj.tournamentVenueId,
                tournamentVenueName: obj.tournamentVenueName,
                dateTime: obj.dateTime,
                result: obj.result,
            });
            this.totalCount = this.lstMatches.length;
        });
        this.setFooter();
        this.isDataLoaded = true;
    }

    onRowsChange(data) {
        this.perPage = data.name;
        this.rowsOnPage = data.name;
        this.getMatches();
    }

    searchSports() {
        this.getMatches();
    }

    onSportDetails(userId) {
        this.router.navigate([`/sport/${userId}/detail`]);
    }

    onPageSetUP(type) {
        switch(type) {
            case 'first':
                this.page = 1;
                this.getMatches();
                break;
            case 'prev':
                this.page = (this.page > 1) ? this.page - 1 : 1;
                this.getMatches();
                break;
            case 'next':
                this.page = this.page + 1;
                this.getMatches();
                break;
            case 'last':
                let last = (
                    (parseInt(this.totalCount.toString(), 10)) / (parseInt(this.perPage.toString(), 10))
                );
                last = parseInt(last.toString(), 10);
                this.page = last;
                this.getMatches();
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

    deleteMatch(id) {
        Swal.fire('Warning', 'Are you sure want to delete match?')
            .then(result => {
                if (result.value) {
                    const request = {
                        id: id
                    };
                    this.matchDelete(request);
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

    matchDelete(request) {
        this.match.matchDelete(request).subscribe(res => {
            this.getMatches();
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['/auth/login']);
            }
        });
    }
}