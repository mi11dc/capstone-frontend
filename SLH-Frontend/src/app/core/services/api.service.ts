import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, shareReplay, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    public get(
        path: string,
        queryParms: any,
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        let httpParams: HttpParams;
        let httpHeaders: HttpHeaders = new HttpHeaders();
        Object.keys(queryParms).forEach(key => {
        if (key === 'headers') {
            Object.keys(queryParms.headers).forEach(hkey => {
                if (queryParms.headers[hkey] !== null && queryParms.headers[hkey] !== '') {
                    // tslint:disable-next-line: quotemark
                    httpHeaders = httpHeaders.set(hkey, queryParms.headers[hkey]);
                }
            });
        } else {
            httpParams = this.getQueryParams(queryParms);
        }
        });
        return this.http
            .get(`${baseUrl + path}`, {
                headers: httpHeaders,
                observe: 'response',
                params: httpParams
            })
            .pipe(
                retry(1),
                shareReplay()
            );
    }
    public getSingle(
        path: string,
        httpHeaders: any = {},
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        return this.http.get(`${baseUrl + path}`, { headers: httpHeaders, observe: 'response' }).pipe(
            retry(1),
            shareReplay()
        );
    }
    public post(
        path: string,
        requestObject: any,
        httpHeaders: any = {},
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        return this.http
        .post(`${baseUrl + path}`, requestObject, {
            headers: httpHeaders,
            observe: 'response'
        })
        .pipe(
            retry(1),
            shareReplay()
        );
    }

    public postFormEncoded(
        path: string,
        requestObject: any,
        httpHeaders: any = {},
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        const body =  new URLSearchParams();
        if (requestObject) {
            Object.keys(requestObject).forEach(obj => {
                if (requestObject[obj] !== null || requestObject[obj] !== undefined) {
                body.set(obj, requestObject[obj]);
                }
            });
        }
        return this.http
        .post(`${baseUrl + path}`, body.toString(), { headers: {'Content-Type': 'application/x-www-form-urlencoded'}, observe: 'response' })
        .pipe(
            retry(1),
            shareReplay()
        );
    }

    public uploadFile(
        path: string,
        requestObject: any,
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        return this.http
        .post(`${baseUrl + path}`, requestObject, {
            reportProgress: true,
            observe: 'events'
        })
        .pipe(
            retry(1),
            shareReplay()
        );
    }

    public put(
        path: string,
        requestObject: any,
        httpHeaders: any = {},
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        return this.http
        .put(`${baseUrl + path}`, requestObject, {
            headers: httpHeaders,
            observe: 'response'
        })
        .pipe(
            retry(1),
            shareReplay()
        );
    }
    public delete(
        path: string,
        httpHeaders: any = {},
        baseUrl: string = environment.baseURL
    ): Observable<any> {
        return this.http.delete(`${baseUrl + path}`, { headers: httpHeaders, observe: 'response' }).pipe(
            shareReplay()
        );
    }
    
    private getQueryParams(queryParams: any) {
        let queryString: HttpParams = new HttpParams();
        Object.keys(queryParams).forEach(param => {
        if (param !== 'headers') {
            if (queryParams[param] !== null && queryParams[param] !== '') {
            const value = queryParams[param].toString().trim();
            queryString = queryString.append(param, value);
            }
        }
        });
        return queryString;
    }
}
