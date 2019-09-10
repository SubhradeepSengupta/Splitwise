import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { GroupService } from '../../groups/shared/group.service';
import { UserDetails, UserGroup } from '../shared/user.model';

@Component({
    selector: 'app-current-user',
    templateUrl: './current-user.component.html',
    styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

    currentUserDetails: UserDetails;
    groupDetails: UserGroup;
    isAvailable: boolean;

    constructor(private _userService: UserService, private _groupService: GroupService) {
        this.isAvailable = false;
    }

    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(
            res => {
                this.currentUserDetails = res as UserDetails;
                this.isAvailable = true;
            },
            err => {
                debugger
            });

        this._groupService.GetAllGroups().subscribe(
            res => {
                this.groupDetails = res as UserGroup;
            },
            err => {
                debugger
            });
    }

}
