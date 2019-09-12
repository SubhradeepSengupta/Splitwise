import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Category, GroupDetails } from '../shared/group.model';

@Component({
    selector: 'app-group-edit',
    templateUrl: './group-edit.component.html',
    styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

    groupID: number;
    groupDetails: GroupDetails;
    categoryList: Category[];
    isAvailable: boolean;

    constructor(private _groupService: GroupService, private _route: ActivatedRoute, private _router: Router) {
        this.groupID = +this._route.snapshot.paramMap.get('id');
        this.groupDetails = new GroupDetails();
        this.categoryList = [];
        this.isAvailable = false;
    }

    ngOnInit() {
        this._groupService.GetGroupById(this.groupID).subscribe(
            (res) => {
                this.groupDetails = res as GroupDetails;
                this.isAvailable = true;
            },
            err => {
                debugger
            });

        this._groupService.GetCategories().subscribe(
            res => {
                this.categoryList = res as Category[];
            },
            err => {
                debugger
            });
    }

    RemoveUserFromGroup(userID: string) {
        var index = this.groupDetails.GroupUsers.findIndex(x => x.Id == userID);
        this.groupDetails.GroupUsers.splice(index, 1);
    }

    OnSubmit(groupDetails: GroupDetails) {
        this._groupService.EditGroup(groupDetails).subscribe(
            res => {
                this._router.navigate(['/groups']);
            },
            err => {
                console.log(err);
            });
    }
}
