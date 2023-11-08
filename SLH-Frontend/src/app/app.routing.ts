import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const AppRoutes: Routes = [
    {
        path:'',
        redirectTo: 'sports',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'sports',
                loadChildren: () => import('./modules/sports/sports.module').then(m => m.SportModule)
            },
            {
                path: 'venues',
                loadChildren: () => import('./modules/venues/venue.module').then(m => m.VenueModule)
            },
            {
                path: 'teams',
                loadChildren: () => import('./modules/teams/team.module').then(m => m.TeamModule)
            },
            {
                path: 'tournaments',
                loadChildren: () => import('./modules/tournaments/tournament.module').then(m => m.TournamentModule)
            },
            {
                path: 'matches',
                loadChildren: () => import('./modules/matches/match.module').then(m => m.MatchModule)
            }
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    }
];
