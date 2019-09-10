import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupDetails, CreateUserMapper, CreateGroupModel } from './group.model';

@Injectable({
    providedIn: 'root'
})

export class GroupService {

    URL = 'http://localhost:64169/api/Group';

    constructor(private _http: HttpClient) { }

    GetCategories() {
        return this._http.get(this.URL + "/category");
    }

    GetAllGroups() {
        return this._http.get(this.URL + "/groups");
    }

    GetGroupById(groupId: number) {
        return this._http.get(this.URL + "/groups/" + groupId);
    }

    CreateGroup(groupData: CreateGroupModel) {
        return this._http.post(this.URL + "/groups", groupData);
    }

    EditGroup(groupData: GroupDetails) {
        return this._http.put(this.URL + "/groups", groupData);
    }

    AddUserToGroup(userData: CreateUserMapper[], groupId: number) {
        return this._http.post(this.URL + "/groups/" + groupId, userData);
    }

    DeleteGroup(groupID: number) {
        return this._http.delete(this.URL + "/groups/" + groupID);
    }
}