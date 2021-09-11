import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';


import { UsersAppComponent } from './users-app.component';
import { UsersListComponent } from './users/users-list.components';
import { UserThumbnailComponent } from './users/user-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { UserService } from './users/shared/user.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    UsersAppComponent,
    UsersListComponent,
    UserThumbnailComponent,
    NavBarComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [UsersAppComponent]
})
export class AppModule { }
