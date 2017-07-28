import { Component } from '@angular/core'
import {User} from './../Biswa_Services/user.service'

@Component({
  selector: 'biswa-create',
  template: `
                <h3>Add Record - {{newName}}</h3><br/>
                <form name="addForm" action="#">
                    <input type="text" name="empName" id="empName" [(ngModel)]="newName" autoGrow>
                    <input type="submit" name="submit" id="submit">
                </form><br/>
                <ul>
                    <li *ngFor="let aUser of users">{{aUser}}</li>
                </ul>
            `,
    providers: [User],
})

export class create  {
    users: string[];
    newName: string;
    constructor (userService: User) {
        this.users = userService.readAll();
    }
}
