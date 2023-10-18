import { Routes } from "@angular/router";
import { SportListComponent } from "./pages/list/sport-list.component";
import { SportAddComponent } from "./pages/add/sport-add.component";
import { SportEditComponent } from "./pages/edit/sport-edit.component";
import { SportDetailComponent } from "./pages/detail/sport-detail.component";

export const SportRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: SportListComponent
            },
            {
                path: 'add',
                component: SportAddComponent
            },
            // {
            //     path: ':id/edit',
            //     component: SportEditComponent,
            // },
            // {
            //     path: ':id/detail',
            //     component: SportDetailComponent,
            // }
        ]
    }
];