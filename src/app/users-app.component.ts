import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users-app',
  template: `
  <nav-bar #nav></nav-bar>
  <users-list></users-list>
  `
})
export class UsersAppComponent {
  title = 'app';
}
