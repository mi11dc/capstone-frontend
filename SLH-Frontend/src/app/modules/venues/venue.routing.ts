import { Routes } from "@angular/router";
import { VenueListComponent } from "./pages/list/venue-list.component";
import { VenueAddComponent } from "./pages/add/venue-add.component";
import { VenueEditComponent } from "./pages/edit/venue-edit.component";
import { VenueDetailComponent } from "./pages/detail/venue-detail.component";

export const VenueRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: VenueListComponent
            },
            {
                path: 'add',
                component: VenueAddComponent
            },
            // {
            //     path: ':id/edit',
            //     component: VenueEditComponent,
            // },
            // {
            //     path: ':id/detail',
            //     component: VenueDetailComponent,
            // }
        ]
    }
];