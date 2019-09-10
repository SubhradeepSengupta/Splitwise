export class CreateGroupModel {
    ID: number;
    Name: string;
    Category: number;
    Note: string;
    SimplifyDebts: boolean;
    UserGroupMapper: CreateUserMapper[];

    constructor() {
        this.ID = 0;
        this.Name = '';
        this.Category = 0;
        this.Note = '';
        this.SimplifyDebts = false;
        this.UserGroupMapper = [];
    }
}

export class CreateUserMapper {
    FullName: string;
    UserName: string;

    constructor(FullName, UserName) {
        this.FullName = FullName;
        this.UserName = UserName;
    }
}

export class GroupDetails {
    GroupID: number;
    GroupName: string;
    CreatedBy: string;
    DateCreated: Date;
    Category: number;
    Note: string;
    SimplifyDebts: boolean;
    GroupUsers: GroupUser[];

    constructor() {
        this.GroupID = 0;
        this.GroupName = '';
        this.CreatedBy = '';
        this.DateCreated = null;
        this.Category = 0;
        this.Note = '';
        this.SimplifyDebts = null;
        this.GroupUsers = [];
    }
}

export class GroupUser {
    Id: string;
    FullName: string;
    UserName: string;
    DefaultCurrency: number;
    DefaultLanguage: number;
}

export class Category {
    ID: number;
    Name: string;

    constructor() {
        this.ID = 0;
        this.Name = '';
    }
}