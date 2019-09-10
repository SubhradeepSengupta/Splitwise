import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../shared/group.service';
import { ExpenseService } from '../../expenses/shared/expenses.service';
import { GroupDetails } from '../shared/group.model';
import { ExpenseDetails } from '../../expenses/shared/expense.model';

@Component({
    selector: 'app-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

    groupID: number;
    groupDetails: GroupDetails;
    expenses: ExpenseDetails[];
    isAvailable: boolean;

    constructor(private _route: ActivatedRoute, private _groupService: GroupService, private _expenseService: ExpenseService) {
        this.groupID = +this._route.snapshot.paramMap.get('id');
        this.groupDetails = new GroupDetails();
        this.expenses = [];
        this.isAvailable = false;
    }

    ngOnInit() {
        this._groupService.GetGroupById(this.groupID).subscribe(
            res => {
                this.groupDetails = res as GroupDetails;
                this.isAvailable = true;
            },
            err => {
                debugger
            });

        this._expenseService.GetAllExpenses(this.groupID).subscribe(
            res => {
                this.expenses = res as ExpenseDetails[];
            },
            err => {
                debugger
            });
    }

}
