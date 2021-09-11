import {Component} from '@angular/core';
import { UserService } from '../users/shared/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    searchTerm = '';
    constructor(private userService: UserService) { }

    searchUsers(searchTerm) {
        this.userService.getUsers(searchTerm);
    }

    sortUser(order) {
        this.userService.sortUserData(order);
    }
}
