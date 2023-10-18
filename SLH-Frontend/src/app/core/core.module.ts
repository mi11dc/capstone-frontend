import { ErrorHandler, NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from "./guards/auth.guard";
import { ApiService } from "./services/api.service";
import { UtilityService } from "./services/utility.service";
import { NotificationService } from "./services/notification.service";
import { ErrorService } from "./services/error.service";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { LoaderService } from "./services/loader.service";
import { LoaderInterceptorService } from "./interceptors/loader-interceptor.service";
import { TokenInterceptService } from "./interceptors/token.interceptor.service";
import { ToastrModule } from "ngx-toastr";

@NgModule({
    imports: [
        HttpClientModule,
        // ToastrModule.forRoot(),
    ],
    declarations: [
    ],
    providers: [
        ApiService,
        NotificationService,
        ErrorService,
        AuthGuard,
        { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
        LoaderService,
        UtilityService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptService,
            multi: true
        }
    ]
  })
  export class CoreModule {
    constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error(
          'Core Module is already loaded, You should only load CoreModule in AppModule'
        );
      }
    }
  }