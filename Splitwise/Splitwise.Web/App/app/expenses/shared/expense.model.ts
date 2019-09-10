export class ExpenseModel {
    Name: string;
    Date: Date;
    Payee: string;
    Amount: number;
    IncludedUsers: IncludedUser[];
    SplitType: string;
    Note: string;

    constructor() {
        this.Name = '';
        this.Date = null;
        this.Payee = '';
        this.Amount = 0;
        this.SplitType = '';
        this.Note = '';
        this.IncludedUsers = [];
    }
}

export class IncludedUser {
    UserID: string;
    UserName: string;
    UserAmount: number;
    Percentage: number

    constructor(UserID, UserName, UserAmount, Percentage) {
        this.UserID = UserID;
        this.UserName = UserName;
        this.UserAmount = UserAmount;
        this.Percentage = Percentage;
    }
}

export class Expense {
    ExpenseID: number;
    ExpenseName: string;
    Date: Date;
    PayeeID: string;
    TotalAmount: number;
    SplitType: string;
    Note: string;
    Payer: IncludedUser[];

    constructor() {
        this.ExpenseID = 0;
        this.ExpenseName = '';
        this.Date = null;
        this.PayeeID = '';
        this.TotalAmount = 0;
        this.SplitType = '';
        this.Note = '';
        this.Payer = [];
    }
}

export class ExpenseDetails {
    ID: string;
    ExpenseName: string;
    Date: Date;
    Amount: number;
    TotalAmount: number;
    PayerID: string;
    Payer: string;
    PayeeID: string;
    Payee: string;

    constructor() {
        this.ID = '';
        this.ExpenseName = '';
        this.Date = null;
        this.Amount = 0;
        this.TotalAmount = 0;
        this.PayerID = '';
        this.Payer = '';
        this.PayeeID = '';
        this.Payee = '';
    }
}

export class SettlementData {
    GroupID: number;
    Payee: string;
    Payer: string;
    Amount: number;
    SettlementDate: Date;

    constructor() {
        this.GroupID = null;
        this.Payee = '';
        this.Payer = '';
        this.Amount = 0;
        this.SettlementDate = null;
    }
}