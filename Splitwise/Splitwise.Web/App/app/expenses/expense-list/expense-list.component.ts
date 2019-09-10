import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../shared/expenses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../groups/shared/group.service';
import { ExpenseDetails } from '../shared/expense.model';
import { GroupDetails } from '../../groups/shared/group.model';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

    groupId: number;
    groupDetails: GroupDetails;
    expenseList: ExpenseDetails[];
    isAvailable: boolean;

    constructor(private _expenseService: ExpenseService, private _groupService: GroupService, private _route: ActivatedRoute, private _router: Router) {
        this.groupId = + this._route.snapshot.paramMap.get('groupId');
        this.groupDetails = new GroupDetails();
        this.expenseList = [];
        this.isAvailable = false;
    }

    ngOnInit() {
        this._expenseService.GetAllExpenses(this.groupId).subscribe(
            res => {
                this.expenseList = res as ExpenseDetails[];
            },
            err => {
                debugger
            });

        this._groupService.GetGroupById(this.groupId).subscribe(
            res => {
                this.groupDetails = res as GroupDetails;
                this.isAvailable = true;
            },
            err => {
                debugger
            });
    }

    DeleteExpense(groupId: number, expenseId: number) {
        this._expenseService.RemoveExpense(groupId, expenseId).subscribe(
            res => {
                this._router.navigate(['/groups/' + groupId]);
            },
            err => {
                debugger
            });
    }

}
