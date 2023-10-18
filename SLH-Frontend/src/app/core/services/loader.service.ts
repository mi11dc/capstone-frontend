import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
    // loader state maintain: not any
    private loaderSubject = new Subject<any>();
    loaderState = this.loaderSubject.asObservable();

    constructor() {}
    show() {
        // loader state maintain
        this.loaderSubject.next({ show: true });
    }
    hide() {
        // loader state maintain
        this.loaderSubject.next({ show: false });
    }
}
