import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../groups/shared/group.service';
import { IncludedUser, ExpenseModel } from '../shared/expense.model';
import { ExpenseService } from '../shared/expenses.service';
import { GroupDetails } from '../../groups/shared/group.model';

@Component({
    selector: 'app-expense-create',
    templateUrl: './expense-create.component.html',
    styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {

    groupId: number;
    groupDetails: GroupDetails;
    expenseData: ExpenseModel;
    isAvailable: boolean;

    constructor(private _groupService: GroupService, private _expenseService: ExpenseService, private _route: ActivatedRoute, private _router: Router) {
        this.groupId = + this._route.snapshot.paramMap.get('groupId');
        this.groupDetails = new GroupDetails();
        this.expenseData = new ExpenseModel();
        this.isAvailable = false;
    }

    ngOnInit() {
        this._groupService.GetGroupById(this.groupId).subscribe(
            res => {
                this.groupDetails = res as GroupDetails;
                this.isAvailable = true;
            },
            err => {
                debugger
            });
    }

    UserInclude(userId: string, userName: string) {
        let users = new IncludedUser(userId, userName, null, null);
        if (this.expenseData.IncludedUsers.some(n => n.UserID === userId)) {
            this.expenseData.IncludedUsers.splice(this.expenseData.IncludedUsers.findIndex(u => u.UserID === userId), 1);
        }
        else {
            this.expenseData.IncludedUsers.push(users);
        }
        this.OnSplitSelect();
    }

    OnSplitSelect() {
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
   
    OnSubmit() {
        this._expenseService.PostExpense(this.groupId, this.expenseData).subscribe(
            res => {
                this._router.navigate(['/groups/' + this.groupId]);
            },
            err => {
                debugger
            });
    }
}
