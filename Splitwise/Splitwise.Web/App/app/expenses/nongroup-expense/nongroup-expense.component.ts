import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseModel, IncludedUser } from '../shared/expense.model';
import { ExpenseService } from '../shared/expenses.service';
import { Router } from '@angular/router';
import { UserDetails } from '../../users/shared/user.model';
import { UserService } from '../../users/shared/user.service';

@Component({
    selector: 'app-nongroup-expense',
    templateUrl: './nongroup-expense.component.html',
    styleUrls: ['./nongroup-expense.component.css']
})
export class NongroupExpenseComponent implements OnInit {
    @ViewChild('UserName') UserName: ElementRef;


    expenseData: ExpenseModel;
    currentUserData: UserDetails;
    friendList: UserDetails[];
    individualUserData: UserDetails;
    friendsAvailable: boolean;
    currentUser: boolean;
    individualUser: boolean;

    constructor(private _userService: UserService, private _expenseService: ExpenseService, private _router: Router) {
        this.expenseData = new ExpenseModel();
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
    }

    AddUser(userId: string, userName: string) {
        let users = new IncludedUser(userId, userName, null, null);
        if (this.expenseData.IncludedUsers.some(n => n.UserID === userId)) {
            this.expenseData.IncludedUsers.splice(this.expenseData.IncludedUsers.findIndex(u => u.UserID === userId), 1);
        }
        else {
            this.expenseData.IncludedUsers.push(users);
        }
        this.SplitSelect();
        console.log(this.expenseData.IncludedUsers);
    }

    getAllFriends(userId: string) {
        this.expenseData.IncludedUsers = [];
        this.individualUserData = new UserDetails();

        if (userId !== this.currentUserData.Id) {
            this.currentUser = false;
            this._userService.GetUserById(userId).subscribe(
                res => {
                    this.individualUserData = res as UserDetails;
                    this.individualUser = true;

                    let users = new IncludedUser(userId, this.individualUserData.FullName, null, null);
                    this.expenseData.IncludedUsers.push(users);
                },
                err => {
                    debugger
                });
        }
        else {
            this.currentUser = true;
            this.individualUser = false;
            let users = new IncludedUser(userId, this.currentUserData.FullName, null, null);
            this.expenseData.IncludedUsers.push(users);
        }

        this._userService.GetAllFriends(userId).subscribe(
            res => {
                this.friendList = res as UserDetails[];
                this.friendsAvailable = true;
            },
            err => {
                debugger
            });
    }

    SplitSelect() {
        if (this.expenseData.SplitType === 'Equal') {
            for (let i = 0; i < this.expenseData.IncludedUsers.length; i++) {
                this.expenseData.IncludedUsers[i].UserAmount = (this.expenseData.Amount / this.expenseData.IncludedUsers.length);
            }
        }
        else {
            for (let i = 0; i < this.expenseData.IncludedUsers.length; i++) {
                this.expenseData.IncludedUsers[i].UserAmount = null;
            }
        }
    }

    Submit() {
        this._expenseService.PostExpense(0, this.expenseData).subscribe(
            res => {
                this._router.navigate(['/nongroup-expense']);
            },
            err => {
                debugger
            });
    }
}
