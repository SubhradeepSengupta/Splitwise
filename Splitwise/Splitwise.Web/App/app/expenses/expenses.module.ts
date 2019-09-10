import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { SettlementComponent } from './settlement/settlement.component';
import { ExpenseService } from './shared/expenses.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NongroupExpenseComponent } from './nongroup-expense/nongroup-expense.component';
import { NongroupExpenseListComponent } from './nongroup-expense-list/nongroup-expense-list.component';

@NgModule({
  declarations: [ExpenseListComponent, ExpenseDetailsComponent, ExpenseCreateComponent, ExpenseEditComponent, SettlementComponent, NongroupExpenseComponent, NongroupExpenseListComponent],
  imports: [
      CommonModule,
      FormsModule,
      RouterModule
    ],
    providers: [ExpenseService]
})
export class ExpensesModule { }
