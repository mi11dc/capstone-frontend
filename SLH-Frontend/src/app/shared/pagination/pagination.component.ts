import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../../_services/api.service';
// import { url } from 'inspector';
// import { environment } from 'src/environments/environment';
// import { BehaviorSubject, Subject, Observable, AsyncSubject } from 'rxjs';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

    total_pages: number;
    do_not_load = false;
    customPage: number;
    automatic = true;
    @Input() queryParams:any;
    @Input() current_page: number;
    @Input() page_size: number;
    @Input() url: string;
    @Input() changes: any;
    @Output() result = new EventEmitter();
    @Output() displayPage = new EventEmitter();

    constructor(
        private http: HttpClient,
        // private _api: ApiService
    ) { }

    ngOnInit() {
        this.changes.subscribe((data) => {
            this.queryParams = data;
            this.page(1);
        });
        if (! this.url ) {
            console.error('Url is required to fetch the data');
            return ;
        }

    }

    page(page: number) {
        if (page > this.total_pages) {
            alert("Oops! Entered page number is greater than total page number")
        } else {
            let page_size = this.queryParams.find(x => x.key === 'limit').value;
            const offset = (page - 1) * page_size;
            // this.queryParams.push({key: 'offset', value: offset});
            let customURL =  '';
            this.queryParams.forEach((element,index) => {
                customURL = customURL + `${element.key}=${element.value}&`
            });
            customURL = `${this.url}?${customURL}offset=${offset}`;
            this.http.get(customURL)
                .subscribe((response:any) => {
                    this.result.emit(response);
                    this.displayPage.emit({'currentPage':this.current_page, 'offset':offset});
                    this.current_page = page;
                    if (response.count!=undefined){
                        this.total_pages = Math.ceil((response.count) / (page_size));
                    }
                    if(response.total!=undefined){
                        this.total_pages = Math.ceil((response.total) / (page_size));
                    }
                }, error => {
                    console.error('error from fetching page, ${page}');
                });
        }
    }
    custom_sort(a, b) {
        return new Date(b.created_ts).getTime() - new Date(a.created_ts).getTime();
    }
    ngOnDestroy() {
        this.changes.unsubscribe();
    }
}
