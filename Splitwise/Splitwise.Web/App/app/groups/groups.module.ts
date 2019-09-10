import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { RouterModule } from '@angular/router';
import { GroupService } from './shared/group.service';
import { FormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';

@NgModule({
    declarations: [
        GroupListComponent,
        GroupDetailsComponent,
        GroupCreateComponent,
        GroupEditComponent,
        AddMemberComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [GroupService]
})
export class GroupsModule { }
