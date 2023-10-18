import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

    constructor(
        // private toastService: ToastrService,
        private zone: NgZone
    ) { }

    showSuccess(message: string): void {
        // Had an issue with the snackbar being ran outside of angular's zone.
        this.zone.run(() => {
            // this.toastService.success(message, 'Success');
        });
    }

    showError(message: string): void {
        this.zone.run(() => {
            // The second parameter is the text in the button. 
            // In the third, we send in the css class for the snack bar.
            // this.toastService.error(message, 'Error');
        });
    }
}
