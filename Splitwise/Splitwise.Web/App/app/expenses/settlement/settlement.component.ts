import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../groups/shared/group.service';
import { GroupDetails } from '../../groups/shared/group.model';
import { SettlementData } from '../shared/expense.model';
import { ExpenseService } from '../shared/expenses.service';
import { Router } from '@angular/router';
import { UserDetails } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';

@Component({
    selector: 'app-settlement',
    templateUrl: './settlement.component.html',
    styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

    groupList: GroupDetails[];
    settlementData: SettlementData;
    isAvailable: boolean;
    totalAmount: number;
    expenseIsAvailable: boolean;

    currentUserData: UserDetails;
    friendList: UserDetails[];
    individualUserData: UserDetails;
    friendsAvailable: boolean;
    currentUser: boolean;
    individualUser: boolean;

    constructor(private _userService: UserService, private _expenseService: ExpenseService, private _groupService: GroupService, private _router: Router) {
        this.isAvailable = false;
        this.groupList = [];
        this.settlementData = new SettlementData();
        this.expenseIsAvailable = false;

        this.currentUserData = new UserDetails();
        this.friendList = [];
        this.individualUserData = new UserDetails();
        this.friendsAvailable = false;
        this.currentUser = false;
        this.individualUser = false;
    }

    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(
            res => {
                this.currentUserData = res as UserDetails;
                this.currentUser = true;
            },
            err => {
                debugger
            });

        this._groupService.GetAllGroups().subscribe(
            res => {
                this.groupList = res as GroupDetails[];
                this.isAvailable = true;
            },
            err => {
                debugger
            });
    }

    FetchExpense(groupId: number, payerId: string, payeeId: string) {
        this._expenseService.GetExpenseByUser(groupId, payerId, payeeId).subscribe(
            res => {
                this.settlementData.Amount = res as number;
                this.totalAmount = res as number;
                if (res > 0)
                    this.expenseIsAvailable = true;
            },
            err => {
                console.log(err);
            });
    }

    getAllFriends(userId: string) {
        this.individualUserData = new UserDetails();

        if (userId !== this.currentUserData.Id) {
            this.currentUser = false;
            this._userService.GetUserById(userId).subscribe(
                res => {
                    this.individualUserData = res as UserDetails;
                    this.individualUser = true;
                },
                err => {
                    debugger
                });
        }
        else {
            this.currentUser = true;
            this.individualUser = false;
        }

        this._userService.GetAllFriends(userId).subscribe(
            res => {
                this.friendList = res as UserDetails[];
                this.friendsAvailable = true;
            },
            err => {
                debugger
            });

        this.FetchExpense(this.settlementData.GroupID, this.settlementData.Payer, this.settlementData.Payee);
    }


    Submit() {
        this._expenseService.Settlement(this.settlementData).subscribe(
            res => {
                this._router.navigate(['/dashboard']);
            },
            err => {
                debugger
            });
    }
}
