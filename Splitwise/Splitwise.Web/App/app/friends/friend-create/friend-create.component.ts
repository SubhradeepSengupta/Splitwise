import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDetails } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-friend-create',
    templateUrl: './friend-create.component.html',
    styleUrls: ['./friend-create.component.css']
})
export class FriendCreateComponent implements OnInit {
    @ViewChild('FullName') FullName: ElementRef;
    @ViewChild('UserName') UserName: ElementRef;

    friendList: UserDetails;
    currentUserId: string;
    addedFriends: UserDetails[];

    constructor(private _userService: UserService, private _route: ActivatedRoute) {
        this.currentUserId = this._route.snapshot.paramMap.get('id');
        this.addedFriends = [];
    }

    ngOnInit() {
        this._userService.GetAllFriends(this.currentUserId).subscribe(
            res => {
                this.friendList = res as UserDetails;
            },
            err => {
                debugger
            });
    }

    AddFriend(fullName: string, userName: string) {
        let newlyAddedFriends = new UserDetails();

        newlyAddedFriends.Id = null;
        newlyAddedFriends.FullName = fullName;
        newlyAddedFriends.UserName = userName;

        this.addedFriends.push(newlyAddedFriends);

        this.FullName.nativeElement.value = '';
        this.UserName.nativeElement.value = '';
    }

    Submit() {
        this._userService.AddFriend(this.currentUserId, this.addedFriends).subscribe(
            res => {
                location.reload();
            },
            err => {
                debugger
            });
    }
}
