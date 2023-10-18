import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { LoggingService } from './logging.service';
import { ErrorService } from './error.service';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(private injector: Injector) {}

    handleError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorService);
        // const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);
        const router = this.injector.get(Router);
        let message;
        if (error instanceof HttpErrorResponse) {
        // Server error
            console.log('server')
            if (error.status !== 401) {
                // UtilityService.clearLocalStorage();
                // router.navigate(['auth']);
                // console.log('status')
                message = errorService.getServerErrorMessage(error);
                notifier.showError(message);
            }
        } else {
        // Client Error
        // console.log('client')
        // message = errorService.getClientErrorMessage(error);
        // notifier.showError(message);
        }
        // Always log errors
        // logger.logError(message, stackTrace);
        console.error(error);
    }
}
