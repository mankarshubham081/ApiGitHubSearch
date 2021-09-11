import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { UserService } from './shared/user.service';
import { map } from 'rxjs/operators';
import { IUsers, IUser } from './shared/user.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'users-list',
    template: `
    <div class='list-box'>
        <h5>Total Results : {{totalCount}}</h5>
        <div class="row">
                <div *ngFor="let user of users" class='col-12'>
                    <user-thumbnail [user]="user"></user-thumbnail>
                </div>
        </div>
    </div>
    `
})
export class UsersListComponent implements OnInit {
    users: IUser[] = [];
    totalCount: number;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers('henry');

        this.userService.searchUser.subscribe((res: IUsers) => {
            this.users = res.items;
            this.totalCount = res.total_count;
        });

        this.userService.sortUser.subscribe((sortBy) => {
            if (this.users) {
                sortBy === 'name' ? this.users.sort(sortByNameAsc) : this.users.sort(sortByRankDesc);
            }
        });
    }
}

function sortByNameAsc(s1: IUser, s2: IUser) {
    if (s1.login > s2.login) {
        return 1;
    } else if (s1.login === s2.login) {
        return 0;
    } else {
        return -1;
    }
}

function sortByRankDesc(s1: IUser, s2: IUser) {
    return s2.score - s1.score;
}

