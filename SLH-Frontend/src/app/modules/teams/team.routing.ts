import { Routes } from "@angular/router";
import { TeamListComponent } from "./pages/list/team-list.component";
import { TeamAddComponent } from "./pages/add/team-add.component";
import { TeamEditComponent } from "./pages/edit/team-edit.component";
import { TeamDetailComponent } from "./pages/detail/team-detail.component";
import { AddPlayerComponent } from "./pages/addPlayer/addPlayer.component";

export const TeamRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TeamListComponent
            },
            {
                path: 'add',
                component: TeamAddComponent
            },
            {
                path: ':id/addPlayer',
                component: AddPlayerComponent
            },
            {
                path: ':id/edit',
                component: TeamEditComponent,
            },
            {
                path: ':id/detail',
                component: TeamDetailComponent,
            }
        ]
    }
];