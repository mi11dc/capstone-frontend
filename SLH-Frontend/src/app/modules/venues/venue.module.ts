import { NgModule } from "@angular/core";
import { VenueAddComponent } from "./pages/add/venue-add.component";
import { VenueEditComponent } from "./pages/edit/venue-edit.component";
import { VenueListComponent } from "./pages/list/venue-list.component";
import { VenueDetailComponent } from "./pages/detail/venue-detail.component";
import { VenueRoutes } from "./venue.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { VenueService } from "./venue.service";

@NgModule({
    declarations: [
        VenueAddComponent,
        VenueEditComponent,
        VenueListComponent,
        VenueDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(VenueRoutes),
        NgSelectModule
    ],
    providers: [
        VenueService
    ]
})
export class VenueModule { }