import { Component, OnInit } from "@angular/core";
import { Dropdowndata } from "app/core/models/global.model";
import { TableVenueData } from "../../_core/model/model";
import { Router } from "@angular/router";
import { VenueService } from "../../venue.service";
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2';

@Component({
    selector: 'venue-list',
    templateUrl: './venue-list.component.html'
})

export class VenueListComponent implements OnInit {
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

    lstVenues: TableVenueData[];
    tabledata;
    page = 1;
    perPage = 5
    totalCount;

    constructor(
        private router: Router,
        private venue: VenueService,
        private toast: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.setDefaultData();
        this.getVenues();
    }

    setDefaultData() {
        this.lstVenues = new Array<TableVenueData>();
        this.selrow =  {
            id: 1,
            name: '5'
        };
        this.rowsOnPage = this.selrow.name;
    }

    getVenues() {
        this.isDataLoaded = false;
        const queryParams = this.getObject();
        this.venue.getVenues(queryParams).subscribe(res => {
            this.setVenues(res.body.item)
        }, error => {
            this.toast.error(error.message);
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }

    setVenues(data) {
        this.lstVenues = [];
        data.forEach((obj, i) => {
            // if (i === 0) {
            //     this.totalCount = obj.totalCount ;
            // } 
            this.lstVenues.push({
                id: obj.id,
                name: obj.name,
                country: obj.country,
                location: obj.location
            });
            this.totalCount = this.lstVenues.length;
        });
        this.setFooter();
        this.isDataLoaded = true;
    }

    onRowsChange(data) {
        this.perPage = data.name;
        this.rowsOnPage = data.name;
        this.getVenues();
    }

    searchVenues() {
        this.getVenues();
    }

    onVenueDetails(id) {
        this.router.navigate([`/venue/${id}/detail`]);
    }

    onPageSetUP(type) {
        switch(type) {
            case 'first':
                this.page = 1;
                this.getVenues();
                break;
            case 'prev':
                this.page = (this.page > 1) ? this.page - 1 : 1;
                this.getVenues();
                break;
            case 'next':
                this.page = this.page + 1;
                this.getVenues();
                break;
            case 'last':
                let last = (
                    (parseInt(this.totalCount.toString(), 10)) / (parseInt(this.perPage.toString(), 10))
                );
                last = parseInt(last.toString(), 10);
                this.page = last;
                this.getVenues();
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

    deleteVenue(id) {
        Swal.fire('Warning', 'Are you sure want to delete venue?')
            .then(result => {
                if (result.value) {
                    const request = {
                        id: id
                    };
                    this.venueDelete(request);
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

    venueDelete(request) {
        this.venue.venueDelete(request).subscribe(res => {
            this.getVenues();
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }
}