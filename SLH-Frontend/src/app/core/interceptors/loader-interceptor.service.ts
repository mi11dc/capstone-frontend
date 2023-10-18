import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { UtilityService } from '../services/utility.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
    private totalRequests = 0;
    constructor(private loaderService: LoaderService, private injector: Injector) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.totalRequests++;
        this.showLoader();
        const notifier = this.injector.get(NotificationService);
        return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.body) {
                        // const doNotShowMsgUrl = Constants.DO_NOT_SHOW_MSG.find(url => event.url.indexOf(url) >= 0 || event.url.indexOf('display') >= 0);
                        const doNotShowMsgUrl = '';
                        if (!doNotShowMsgUrl) {
                            const {message} = UtilityService.convertObjectToJson(event);
                            if (message) {
                                notifier.showSuccess(message);
                            }
                        }
                    }
                    this.onEnd();
                }
                },
                (err: any) => {
                    this.onEnd();
                }
            )
        );
    }
    private onEnd(): void {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.hideLoader();
        }
    }
    private showLoader(): void {
        this.loaderService.show();
    }
    private hideLoader(): void {
        this.loaderService.hide();
    }
}
