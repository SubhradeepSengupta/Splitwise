import { Component, OnInit } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { UserService } from '../../users/shared/user.service';
import { GroupDetails } from '../shared/group.model';
import { UserDetails } from '../../users/shared/user.model';
@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

    groupList: GroupDetails[];
    currentUser: UserDetails;

    constructor(private _groupService: GroupService, private _userService: UserService) {
        this.groupList = [];
        this.currentUser = new UserDetails();
    }

    ngOnInit() {
        this._groupService.GetAllGroups().subscribe(
            res => {
                this.groupList = res as GroupDetails[];
            },
            err => {
                debugger
            });

        this._userService.GetCurrentUser().subscribe(
            res => {
                this.currentUser = res as UserDetails;
            },
            err => {
                debugger
            });
    }

    DeleteGroup(groupID: number) {
        this._groupService.DeleteGroup(groupID).subscribe(
            res => {
                window.location.reload();
            },
            err => {
                debugger
            });
    }
}
