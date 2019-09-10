import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    URL = 'http://localhost:64169/api/User';

    constructor(private _http: HttpClient) { }

    GetCurrentUser() {
        return this._http.get(this.URL + "/current-user");
    }

    GetUserById(userId: string) {
        return this._http.get(this.URL + "/users/" + userId);
    }

    GetAllFriends(userId: string) {
        return this._http.get(this.URL + "/users/" + userId + "/friends");
    }

    AddFriend(userId: string, userData: UserDetails[]) {
        return this._http.post(this.URL + "/users/" + userId + "/friends", userData);
    }

    GetTotalLent(userId: string) {
        return this._http.get(this.URL + "/users/" + userId + "/total-lent");
    }

    GetTotalBorrowed(userId: string) {
        return this._http.get(this.URL + "/users/" + userId + "/total-borrowed");
    }

    DeleteFriend(userId: string, friendId: string) {
        return this._http.delete(this.URL + "/users/" + userId + "/friends/" + friendId);
    }

    GetAllActivities() {
        return this._http.get(this.URL + "/current-user/activities");
    }

    RemoveActivity(activityId: number) {
        return this._http.delete(this.URL + "/current-user/activities/" + activityId);
    }
}