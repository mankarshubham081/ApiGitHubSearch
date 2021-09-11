import {Routes} from '@angular/router';
import { UsersListComponent } from './users/users-list.components' ;

export const appRoutes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'}
];
