import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupService } from '../shared/group.service';
import { UserService } from '../../users/shared/user.service';
import { CreateGroupModel, CreateUserMapper, Category } from '../shared/group.model';
import {  Router } from '@angular/router';
import { UserDetails } from '../../users/shared/user.model';

@Component({
    selector: 'app-group-create',
    templateUrl: './group-create.component.html',
    styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

    currentUser: UserDetails;
    formData: CreateGroupModel;
    categoryList: Category[];
    isAvailable: boolean;
    newlyAddedFulllName: string;
    newlyAddedUserName: string;

    constructor(private _userService: UserService, private _groupService: GroupService, private _router: Router) {
        this.currentUser = new UserDetails();
        this.formData = new CreateGroupModel();
        this.categoryList = [];
        this.isAvailable = false;
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }

    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(
            res => {
                this.currentUser = res as UserDetails;
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

    AddUser(FullName, UserName) {
        let user = new CreateUserMapper(FullName, UserName);
        this.formData.UserGroupMapper.push(user);

        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }

    OnSubmit() {
        this._groupService.CreateGroup(this.formData).subscribe(
            res => {
                this._router.navigate(['/groups']);
        },
        err => {
            console.log(err);
        })
    }
}
