import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    declarations: [
        // SidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule
    ],
    exports: [],
    providers: []
})
export class SharedModule { }