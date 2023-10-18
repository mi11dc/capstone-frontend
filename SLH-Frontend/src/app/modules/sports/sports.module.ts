import { NgModule } from "@angular/core";
import { SportAddComponent } from "./pages/add/sport-add.component";
import { SportEditComponent } from "./pages/edit/sport-edit.component";
import { SportListComponent } from "./pages/list/sport-list.component";
import { SportDetailComponent } from "./pages/detail/sport-detail.component";
import { SportRoutes } from "./sports.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { SportService } from "./sports.service";

@NgModule({
    declarations: [
        SportAddComponent,
        SportEditComponent,
        SportListComponent,
        SportDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(SportRoutes),
        NgSelectModule
    ],
    providers: [
        SportService
    ]
})
export class SportModule { }