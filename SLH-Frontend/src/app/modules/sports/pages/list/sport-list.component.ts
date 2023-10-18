import { Component, OnInit } from "@angular/core";
import { Dropdowndata } from "app/core/models/global.model";
import { TableSportData } from "../../_core/model/model";
import { Router } from "@angular/router";
import { SportService } from "../../sports.service";
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2';

@Component({
    selector: 'sport-list',
    templateUrl: './sport-list.component.html'
})

export class SportListComponent implements OnInit {
    
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

    lstSports: TableSportData[];
    tabledata;
    page = 1;
    perPage = 5
    totalCount;

    constructor(
        private router: Router,
        private sport: SportService,
        private toast: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.setDefaultData();
        this.getSports();
    }

    setDefaultData() {
        this.lstSports = new Array<TableSportData>();
        this.selrow =  {
            id: 1,
            name: '5'
        };
        this.rowsOnPage = this.selrow.name;
    }

    getSports() {
        this.isDataLoaded = false;
        const queryParams = this.getObject();
        this.sport.getSports(queryParams).subscribe(res => {
            this.setSports(res.body.item)
        }, error => {
            this.toast.error(error.message);
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }

    setSports(data) {
        this.lstSports = [];
        data.forEach((obj, i) => {
            // if (i === 0) {
            //     this.totalCount = obj.totalCount ;
            // } 
            this.lstSports.push({
                id: obj.id,
                name: obj.name
            });
            this.totalCount = this.lstSports.length;
        });
        this.setFooter();
        this.isDataLoaded = true;
    }

    onRowsChange(data) {
        this.perPage = data.name;
        this.rowsOnPage = data.name;
        this.getSports();
    }

    searchSports() {
        this.getSports();
    }

    onSportDetails(userId) {
        this.router.navigate([`/sport/${userId}/detail`]);
    }

    onPageSetUP(type) {
        switch(type) {
            case 'first':
                this.page = 1;
                this.getSports();
                break;
            case 'prev':
                this.page = (this.page > 1) ? this.page - 1 : 1;
                this.getSports();
                break;
            case 'next':
                this.page = this.page + 1;
                this.getSports();
                break;
            case 'last':
                let last = (
                    (parseInt(this.totalCount.toString(), 10)) / (parseInt(this.perPage.toString(), 10))
                );
                last = parseInt(last.toString(), 10);
                this.page = last;
                this.getSports();
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

    deleteSport(id) {
        Swal.fire('Warning', 'Are you sure want to delete sport?')
            .then(result => {
                if (result.value) {
                    const request = {
                        id: id
                    };
                    this.sportDelete(request);
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

    sportDelete(request) {
        this.sport.sportDelete(request).subscribe(res => {
            this.getSports();
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }
}