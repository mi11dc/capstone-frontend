import { Routes } from "@angular/router";
import { MatchListComponent } from "./pages/list/match-list.component";
import { MatchAddComponent } from "./pages/add/match-add.component";
import { MatchEditComponent } from "./pages/edit/match-edit.component";
import { MatchDetailComponent } from "./pages/detail/match-detail.component";

export const MatchRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MatchListComponent
            },
            {
                path: 'add',
                component: MatchAddComponent
            },
            {
                path: ':id/edit',
                component: MatchEditComponent,
            },
            {
                path: ':id/detail',
                component: MatchDetailComponent,
            }
        ]
    }
];