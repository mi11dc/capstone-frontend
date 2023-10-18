import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptService {

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const user = localStorage.getItem('token');
        if (user && this.notByPassRoute(request.url)) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + user
                }
            });
        }
        return next.handle(request);
    }

    notByPassRoute(requestUrl: string) {
        return true;
        // return ! (requestUrl.includes(config.partialUrls.countries));
    }
}
