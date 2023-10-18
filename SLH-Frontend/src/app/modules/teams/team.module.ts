import { NgModule } from "@angular/core";
import { TeamAddComponent } from "./pages/add/team-add.component";
import { TeamEditComponent } from "./pages/edit/team-edit.component";
import { TeamListComponent } from "./pages/list/team-list.component";
import { TeamDetailComponent } from "./pages/detail/team-detail.component";
import { TeamRoutes } from "./team.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { TeamService } from "./team.service";

@NgModule({
    declarations: [
        TeamAddComponent,
        TeamEditComponent,
        TeamListComponent,
        TeamDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(TeamRoutes),
        NgSelectModule
    ],
    providers: [
        TeamService
    ]
})
export class TeamModule { }