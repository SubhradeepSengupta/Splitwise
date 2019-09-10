import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

    activityList: Activity[];

    constructor(private _userService: UserService, private _router: Router) {
        this.activityList = [];
    }

    ngOnInit() {
        this._userService.GetAllActivities().subscribe(
            res => {
                this.activityList = res as Activity[];
            },
            err => {
                debugger
            });
    }

    RemoveActivity(activityId: number) {
        this._userService.RemoveActivity(activityId).subscribe(
            res => {
                location.reload();
            },
            err => {
                debugger
            });
    }
}
