import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendCreateComponent } from './friend-create/friend-create.component';
import { FriendEditComponent } from './friend-edit/friend-edit.component';

@NgModule({
  declarations: [FriendListComponent, FriendCreateComponent, FriendEditComponent],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
