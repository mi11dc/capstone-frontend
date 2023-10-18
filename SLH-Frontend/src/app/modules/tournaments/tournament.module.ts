import { NgModule } from "@angular/core";
import { TournamentAddComponent } from "./pages/add/tournament-add.component";
import { TournamentEditComponent } from "./pages/edit/tournament-edit.component";
import { TournamentListComponent } from "./pages/list/tournament-list.component";
import { TournamentDetailComponent } from "./pages/detail/tournament-detail.component";
import { TournamentRoutes } from "./tournament.routing";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { TournamentService } from "./tournament.service";

@NgModule({
    declarations: [
        TournamentAddComponent,
        TournamentEditComponent,
        TournamentListComponent,
        TournamentDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(TournamentRoutes),
        NgSelectModule
    ],
    providers: [
        TournamentService
    ]
})
export class TournamentModule { }