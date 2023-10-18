import { Routes } from "@angular/router";
import { TournamentListComponent } from "./pages/list/tournament-list.component";
import { TournamentAddComponent } from "./pages/add/tournament-add.component";
import { TournamentEditComponent } from "./pages/edit/tournament-edit.component";
import { TournamentDetailComponent } from "./pages/detail/tournament-detail.component";

export const TournamentRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TournamentListComponent
            },
            {
                path: 'add',
                component: TournamentAddComponent
            },
            // {
            //     path: ':id/edit',
            //     component: TournamentEditComponent,
            // },
            {
                path: ':id/detail',
                component: TournamentDetailComponent,
            }
        ]
    }
];