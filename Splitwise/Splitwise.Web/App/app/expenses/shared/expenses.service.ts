import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettlementData, ExpenseModel, Expense } from './expense.model';

@Injectable({
    providedIn: 'root'
})
    
export class ExpenseService {
    URL = 'http://localhost:64169/api/Expense';

    constructor(private _http: HttpClient) { }

    GetAllExpenses(groupId: number) {
        return this._http.get(this.URL + "/groups/" + groupId + "/expenses");
    }

    GetExpenseById(groupId: number, expenseId: number) {
        return this._http.get(this.URL + "/groups/" + groupId + "/expenses/" + expenseId);
    }

    GetExpenseByUser(groupId, payerId, payeeId) {
        return this._http.get(this.URL + "/groups/" + groupId + "/expenses/" + payerId + "/" + payeeId);
    }

    EditExpense(groupId: number, expenseData: Expense) {
        return this._http.put(this.URL + "/groups/" + groupId + '/expenses', expenseData);
    }

    PostExpense(groupId: number, expenseData: ExpenseModel) {
        return this._http.post(this.URL + "/groups/" + groupId + "/expenses", expenseData);
    }

    RemoveExpense(groupId: number, expenseId: number) {
        return this._http.delete(this.URL + "/groups/" + groupId + "/expenses/" + expenseId);
    }

    GetNonGroupExpense() {
        return this._http.get(this.URL + "/non-group-expenses");
    }

    Settlement(settlementData: SettlementData) {
        return this._http.post(this.URL + "/settlement", settlementData);
    }
}