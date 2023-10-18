import { NgModule } from "@angular/core";
import { MatchAddComponent } from "./pages/add/match-add.component";
import { MatchEditComponent } from "./pages/edit/match-edit.component";
import { MatchListComponent } from "./pages/list/match-list.component";
import { MatchDetailComponent } from "./pages/detail/match-detail.component";
import { MatchRoutes } from "./match.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatchService } from "./match.service";

@NgModule({
    declarations: [
        MatchAddComponent,
        MatchEditComponent,
        MatchListComponent,
        MatchDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(MatchRoutes),
        NgSelectModule
    ],
    providers: [
        MatchService
    ]
})
export class MatchModule { }