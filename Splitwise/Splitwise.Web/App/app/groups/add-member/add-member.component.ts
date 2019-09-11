import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { CreateUserMapper, GroupDetails } from '../shared/group.model';

@Component({
    selector: 'app-add-member',
    templateUrl: './add-member.component.html',
    styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

    groupID: number;
    currentGroup: any;
    newUsers: CreateUserMapper[];
    isAvailable: boolean;
    newlyAddedFulllName: string;
    newlyAddedUserName: string;

    constructor(private _route: ActivatedRoute, private _groupService: GroupService, private _router: Router) {
        this.groupID = +this._route.snapshot.paramMap.get('id');
        this.currentGroup = new GroupDetails();
        this.newUsers = [];
        this.isAvailable = false;
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }

    ngOnInit() {
        this._groupService.GetGroupById(this.groupID).subscribe(
            res => {
                this.currentGroup = res as any;
                this.isAvailable = true;
            },
            err => {
                debugger
            });
    }

    AddMember(FullName, UserName) {
        let user = new CreateUserMapper(FullName, UserName);
        this.currentGroup.GroupUsers.push(user);
        this.newUsers.push(user);

        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }

    Save() {
        this._groupService.AddUserToGroup(this.newUsers, this.groupID).subscribe(
            res => {
                this._router.navigate(['/groups/', this.groupID]);
            },
            err => {
                debugger
            });
    }
}
