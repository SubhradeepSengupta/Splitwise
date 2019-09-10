import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUserComponent } from './current-user/current-user.component';
import { CurrentUserEditComponent } from './current-user-edit/current-user-edit.component';
import { UserService } from './shared/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';

@NgModule({
  declarations: [CurrentUserComponent, CurrentUserEditComponent, DashboardComponent, ActivityListComponent],
  imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RouterModule
    ],
    providers: [UserService]
})
export class UsersModule { }
