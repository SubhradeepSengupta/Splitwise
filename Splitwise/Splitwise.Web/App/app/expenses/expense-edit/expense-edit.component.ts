import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseService } from '../shared/expenses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../groups/shared/group.service';
import { IncludedUser, Expense } from '../shared/expense.model';
import { GroupDetails } from '../../groups/shared/group.model';

@Component({
    selector: 'app-expense-edit',
    templateUrl: './expense-edit.component.html',
    styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

    groupId: number;
    expenseId: number;
    expenseDetails: Expense;
    groupDetails: GroupDetails;
    groupAvailable: boolean;
    expenseAvailable: boolean;

    constructor(private _expenseService: ExpenseService, private _groupService: GroupService, private _route: ActivatedRoute, private _router: Router) {
        this.groupId = + this._route.snapshot.paramMap.get('groupId');
        this.expenseId = + this._route.snapshot.paramMap.get('expenseId');
        this.groupDetails = new GroupDetails();
        this.groupAvailable = false;
        this.expenseAvailable = false;
    }

    ngOnInit() {
        this._expenseService.GetExpenseById(this.groupId, this.expenseId).subscribe(
            res => {
                this.expenseDetails = res as Expense;
                this.expenseAvailable = true;
            },
            err => {
                debugger
            });

        this._groupService.GetGroupById(this.groupId).subscribe(
            res => {
                this.groupDetails = res as GroupDetails;
                this.groupAvailable = true;
            },
            err => {
                debugger
            });
    }

    IsChecked(id: string) {
        if (this.expenseDetails.Payer.some(n => n.UserID === id)) {
            return true;
        }
        else
            return false;
    }

    UserHandle(userId: string, userName: string) {
        let users = new IncludedUser(userId, userName, null, null);

        if (this.expenseDetails.Payer.some(n => n.UserID === userId)) {
            this.expenseDetails.Payer.splice(this.expenseDetails.Payer.findIndex(u => u.UserID === userId), 1);
        }
        else {
            this.expenseDetails.Payer.push(users);
        }
        this.OnSplitChange();
    }

    OnSplitChange() {
        if (this.expenseDetails.SplitType === 'Equal') {
            for (let i = 0; i < this.expenseDetails.Payer.length; i++) {
                this.expenseDetails.Payer[i].UserAmount = (this.expenseDetails.TotalAmount / this.expenseDetails.Payer.length);
            }
        }
        else {
            for (let i = 0; i < this.expenseDetails.Payer.length; i++) {
                this.expenseDetails.Payer[i].UserAmount = null;
                this.expenseDetails.Payer[i].Percentage = null;
            }
        }
    }

    onSubmit() {
        this._expenseService.EditExpense(this.groupId, this.expenseDetails).subscribe(
            res => {
                this._router.navigate(['/groups/' + this.groupId]);
            },
            err => {
                debugger
            });
    }

}
