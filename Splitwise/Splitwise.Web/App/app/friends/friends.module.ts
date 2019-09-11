import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendCreateComponent } from './friend-create/friend-create.component';
import { FriendEditComponent } from './friend-edit/friend-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FriendListComponent, FriendCreateComponent, FriendEditComponent],
  imports: [
      CommonModule,
      FormsModule
  ]
})
export class FriendsModule { }
