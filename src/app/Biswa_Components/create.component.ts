import { Component } from '@angular/core'
import {User} from './../Biswa_Services/user.service'

@Component({
  selector: 'biswa-create',
  template: `
                <h3>Add Record - {{newName}}</h3><br/>
                    <form name="addForm" action="#">
                        <div style="width: 20%; margin: 5%;" class="input-group">
                            <input type="text" name="empName" id="empName" [(ngModel)]="newName" class="form-control" autoGrow>
                            <span class="input-group-btn">
                                <button class="btn btn-primary" name="submit" id="submit" (click)="formSubmit($event)">Submit</button>
                            </span>
                        </div>
                    </form><br/>
                    
                    <ul>
                        <li *ngFor="let aUser of users">
                            {{aUser.name}} <i class="glyphicon"
                                            [class.glyphicon-star-empty]="aUser.profile=='basic'"
                                            [class.glyphicon-star]="aUser.profile=='premium'"
                                            (click)="onStarClick($event)"
                                        ></i>
                        </li>
                    </ul>
            `,
    providers: [User],
})

export class create  {
    users: Object[];
    newName: string;
    constructor (userService: User) {
        this.users = userService.readAll();
    }

    formSubmit($event) {
        this.users.push({'name': this.newName, 'profile': 'basic'});
    }

    onStarClick($event) {
        //toggle between star, i.e. basic or premeium profile
        console.log(this);
    }
}
