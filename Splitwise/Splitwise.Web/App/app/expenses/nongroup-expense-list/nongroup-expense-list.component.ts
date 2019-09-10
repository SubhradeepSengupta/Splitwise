import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../shared/expenses.service';
import { ExpenseDetails } from '../shared/expense.model';

@Component({
    selector: 'app-nongroup-expense-list',
    templateUrl: './nongroup-expense-list.component.html',
    styleUrls: ['./nongroup-expense-list.component.css']
})
export class NongroupExpenseListComponent implements OnInit {

    expenseList: ExpenseDetails[];

    constructor(private _expenseService: ExpenseService) {
        this.expenseList = [];
    }

    ngOnInit() {
        this._expenseService.GetNonGroupExpense().subscribe(
            res => {
                this.expenseList = res as ExpenseDetails[];
                console.log(this.expenseList);
            },
            err => {
                debugger;
            });
    }

    DeleteExpense(expenseId: number) {
        this._expenseService.RemoveExpense(0, expenseId).subscribe(
            res => {
                location.reload();
            },
            err => {
                debugger
            });
    }

}
