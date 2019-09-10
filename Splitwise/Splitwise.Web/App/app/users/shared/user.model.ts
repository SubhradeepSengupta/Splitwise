export class UserDetails {
    Id: string;
    FullName: string;
    UserName: string;

    constructor() {
        this.Id = '';
        this.FullName = '';
        this.UserName = '';
    }
}

export class UserGroup {
    GroupID: number;
    GroupName: string;
    Category: number;
    CreatedBy: string;
    DateCreated: Date;
    Note: string;
    SimplifyDebts: boolean;
    GroupUsers: [];
}

export class Activity {
    ID: number;
    Date: Date;
    Description: string;

    constructor() {
        this.ID = 0;
        this.Date = null;
        this.Description = '';
    }
}