import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExpensesModule } from './expenses/expenses.module';
import { FriendsModule } from './friends/friends.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { GroupCreateComponent } from './groups/group-create/group-create.component';
import { ExpenseCreateComponent } from './expenses/expense-create/expense-create.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';
import { AddMemberComponent } from './groups/add-member/add-member.component';
import { ExpenseListComponent } from './expenses/expense-list/expense-list.component';
import { ExpenseEditComponent } from './expenses/expense-edit/expense-edit.component';
import { CurrentUserComponent } from './users/current-user/current-user.component';
import { CurrentUserEditComponent } from './users/current-user-edit/current-user-edit.component';
import { SettlementComponent } from './expenses/settlement/settlement.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { FriendCreateComponent } from './friends/friend-create/friend-create.component';
import { FriendEditComponent } from './friends/friend-edit/friend-edit.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { NongroupExpenseComponent } from './expenses/nongroup-expense/nongroup-expense.component';
import { NongroupExpenseListComponent } from './expenses/nongroup-expense-list/nongroup-expense-list.component';
import { ActivityListComponent } from './users/activity-list/activity-list.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ExpensesModule,
        FriendsModule,
        GroupsModule,
        UsersModule,
        RouterModule
            .forRoot([
                {
                    path: 'groups',
                    component: GroupListComponent
                },
                {
                    path: 'groups/:id',
                    component: GroupDetailsComponent
                },
                {
                    path: 'create-group',
                    component: GroupCreateComponent
                },
                {
                    path: 'groups/:id/edit-group',
                    component: GroupEditComponent
                },
                {
                    path: 'groups/:id/add-member',
                    component: AddMemberComponent
                },
                {
                    path: 'groups/:groupId/expenses',
                    component: ExpenseListComponent
                },
                {
                    path: 'groups/:groupId/expenses/:expenseId/edit-expense',
                    component: ExpenseEditComponent
                },
                {
                    path: 'groups/:groupId/create-expense',
                    component: ExpenseCreateComponent
                },
                {
                    path: 'groups/:groupId/settlement',
                    component: SettlementComponent
                },
                {
                    path: 'current-user',
                    component: CurrentUserComponent
                },
                {
                    path: 'current-user/edit',
                    component: CurrentUserEditComponent
                },
                {
                    path: 'dashboard',
                    component: DashboardComponent
                },
                {
                    path: 'user/:id/add-friend',
                    component: FriendCreateComponent
                },
                {
                    path: 'user/:userId/friends/:friendId',
                    component: FriendEditComponent
                },
                {
                    path: 'user/:userId/friends',
                    component: FriendListComponent
                },
                {
                    path: 'nongroup-expense',
                    component: NongroupExpenseListComponent
                },
                {
                    path: 'nongroup-expense/create',
                    component: NongroupExpenseComponent
                },
                {
                    path: 'settlement',
                    component: SettlementComponent
                },
                {
                    path: 'current-user/activities',
                    component: ActivityListComponent
                },
                {
                    path: '',
                    redirectTo: 'dashboard',
                    pathMatch: 'full'
                }])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
