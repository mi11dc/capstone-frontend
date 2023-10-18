import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TableActions } from "./table.model";
import { TableSearchPipe } from "../../core/pipe/table-search.pipe";
import { TableHeader } from 'app/core/models/global.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

    @Input() isServerPagination: boolean = false;
    @Input() headerList: TableHeader[] = [];
    @Input() masterList: any;
    @Input() rowsOnPage: number;
    @Input() searchString: string;
    @Input() searchFrom = [];
    @Input() actions: TableActions[] = [];

    @Output() actionOutput = new EventEmitter();

    list: any;
    searchedData: any;
    filterQuery = '';
    sortBy = '';
    sortOrder = 'desc';

    fIndex = 0;
    lIndex = 0;
    totalNo = 0;

    prePage = null;
    curPage = 1;
    nxtPage = 2;

    constructor(
        private tableSearch: TableSearchPipe,
        private router: Router,
    ) { }

    ngOnInit() {
        setTimeout(() => {
            if (Array.isArray(this.masterList)) {
                if (this.isServerPagination) {
                    this.searchedData = this.masterList;
                } else {
                    this.searchedData = this.tableSearch.transform(this.masterList, this.searchString, this.searchFrom);
                }
                if (!this.rowsOnPage) {
                    this.rowsOnPage = this.searchedData.length;
                }
                this.setListVideos(1);
            }
        });
    }

    ngOnChanges() {
        if (this.isServerPagination) {
            this.searchedData = this.masterList;
        }
        else
        {
            this.searchedData = this.tableSearch.transform(this.masterList, this.searchString, this.searchFrom);
        }
        this.setListVideos(1);
    }

    onPageSetUP(type) {
        switch (type) {
            case 'first':
                this.setListVideos(1);
                break;
            case 'prev':
                this.setListVideos(this.prePage);
                break;
            case 'next':
                this.setListVideos(this.nxtPage);
                break;
            case 'last':
                const num = this.totalNo / this.rowsOnPage;
                if (this.checkIntValue(num)) {
                    this.setListVideos(num);
                } else {
                    this.setListVideos(parseInt(num.toString(), 10) + 1);
                }
                break;
            default:
                break;
        }
    }
    setListVideos(currentPage) {
        this.list = [];
        const limit = (currentPage) * this.rowsOnPage;
        for (let i = (((currentPage - 1) * this.rowsOnPage)); i < limit; i++) {
            if (this.searchedData) {
                if (!!this.searchedData ? this.searchedData[i] : false) {
                    this.list.push(this.searchedData[i]);
                }
            }
        }
        this.setFooters(currentPage);
    }
    setFooters(current) {
        this.totalNo = !!this.searchedData ? this.searchedData.length : 0;
        this.fIndex = ((current - 1) * this.rowsOnPage) + 1;
        this.lIndex = (this.fIndex + (this.rowsOnPage - 1) > this.totalNo) ?
            this.totalNo : this.fIndex + (this.rowsOnPage - 1);

        this.curPage = current;
        if (current === 1) {
            this.prePage = null;
        } else {
            this.prePage = current - 1;
        }

        if (this.rowsOnPage >= this.totalNo) {
            this.nxtPage = null;
        } else {
            if (this.lIndex === this.totalNo) {
                this.nxtPage = null;
            } else {
                if (this.lIndex < this.totalNo) {
                    this.nxtPage = current + 1;
                } else {
                    this.nxtPage = null;
                }
            }
        }
    }
    checkIntValue(num) {
        return parseInt(num, 10) === num;
    }

    onActionClick(actionType, row) {
        this.actionOutput.emit({
            type: actionType,
            data: row
        });
    }
}
