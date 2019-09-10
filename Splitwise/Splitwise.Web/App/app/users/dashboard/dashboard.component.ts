import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserDetails, Activity } from '../shared/user.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    currentUserData: UserDetails;
    currentUserDataAvailable: boolean;
    friendList: UserDetails[];
    totalAmountBorrowed: number;
    totalAmountLent: number;
    activityList: Activity[];

    constructor(private _userService: UserService) {
        this.currentUserData = new UserDetails();
        this.currentUserDataAvailable = false;
        this.friendList = [];
        this.activityList = [];
    }

    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(
            res => {
                this.currentUserData = res as UserDetails;
                this.currentUserDataAvailable = true;

                this._userService.GetAllFriends(this.currentUserData.Id).subscribe(
                    res => {
                        this.friendList = res as UserDetails[];
                    },
                    err => {
                        debugger
                    });

                this._userService.GetTotalBorrowed(this.currentUserData.Id).subscribe(
                    res => {
                        this.totalAmountBorrowed = res as number;
                    },
                    err => {
                        debugger
                    });

                this._userService.GetTotalLent(this.currentUserData.Id).subscribe(
                    res => {
                        this.totalAmountLent = res as number;
                    },
                    err => {
                        debugger
                    });
            },
            err => {
                debugger
            });

        this._userService.GetAllActivities().subscribe(
            res => {
                this.activityList = res as Activity[];
            },
            err => {
                debugger
            });
    }

    removeFriend(friendId: string) {
        this._userService.DeleteFriend(this.currentUserData.Id, friendId).subscribe(
            res => {
                location.reload();
            },
            err => {
                debugger
            });
    }
}
