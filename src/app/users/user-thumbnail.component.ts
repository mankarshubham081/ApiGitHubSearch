import {Component, Input} from '@angular/core';
import { IUsers } from './shared/user.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-thumbnail',
    template: `
    <div class="well howerwell thumbnail">
        <div class='row'>
            <div class='col-2 img-section'>
                <img [src]=user.avatar_url>
            </div>
            <div class="col-10">
                <h3>{{user.login}}</h3> 
                <div class='profile-space'>Profile Url: {{user.url}}</div>
                <div>Type: {{user.type}}</div>
                <div>Score: {{user.score}}</div>
                <a href="https://github.com/{{user.login}}"><button type='text' id='details-btn'>Details</button></a>
            </div>
        </div>
    </div>`
})
export class UserThumbnailComponent {
    @Input() user: IUsers;
}
