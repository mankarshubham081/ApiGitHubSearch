import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './user.model';

@Injectable()
export class UserService {
  baseUrl = 'https://api.github.com';
  _searchUser = <BehaviorSubject<IUsers>>new BehaviorSubject({});
  _sortUser = new BehaviorSubject('name');

  constructor(private http: HttpClient) { }

  get searchUser() {
    return this._searchUser.asObservable();
  }

  get sortUser() {
    return this._sortUser.asObservable();
  }

  getUsers(queryParam) {
    return this.http.get<IUsers>(this.baseUrl + '/search/users?q=' + queryParam).subscribe(data => {
      this._searchUser.next(data);
    });
  }

  getUser(user) {
    return this.http.get(this.baseUrl + '/users/' + user + '/repos');
  }

  sortUserData(order) {
    this._sortUser.next(order);
  }
}
