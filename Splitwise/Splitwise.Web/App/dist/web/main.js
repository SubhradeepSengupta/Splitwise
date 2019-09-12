(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let AppComponent = class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.html */ "./app/app.html")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/app.html":
/*!**********************!*\
  !*** ./app/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 3%;\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
const expenses_module_1 = __webpack_require__(/*! ./expenses/expenses.module */ "./app/expenses/expenses.module.ts");
const friends_module_1 = __webpack_require__(/*! ./friends/friends.module */ "./app/friends/friends.module.ts");
const groups_module_1 = __webpack_require__(/*! ./groups/groups.module */ "./app/groups/groups.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./app/users/users.module.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_list_component_1 = __webpack_require__(/*! ./groups/group-list/group-list.component */ "./app/groups/group-list/group-list.component.ts");
const group_details_component_1 = __webpack_require__(/*! ./groups/group-details/group-details.component */ "./app/groups/group-details/group-details.component.ts");
const group_create_component_1 = __webpack_require__(/*! ./groups/group-create/group-create.component */ "./app/groups/group-create/group-create.component.ts");
const expense_create_component_1 = __webpack_require__(/*! ./expenses/expense-create/expense-create.component */ "./app/expenses/expense-create/expense-create.component.ts");
const group_edit_component_1 = __webpack_require__(/*! ./groups/group-edit/group-edit.component */ "./app/groups/group-edit/group-edit.component.ts");
const add_member_component_1 = __webpack_require__(/*! ./groups/add-member/add-member.component */ "./app/groups/add-member/add-member.component.ts");
const expense_list_component_1 = __webpack_require__(/*! ./expenses/expense-list/expense-list.component */ "./app/expenses/expense-list/expense-list.component.ts");
const expense_edit_component_1 = __webpack_require__(/*! ./expenses/expense-edit/expense-edit.component */ "./app/expenses/expense-edit/expense-edit.component.ts");
const current_user_component_1 = __webpack_require__(/*! ./users/current-user/current-user.component */ "./app/users/current-user/current-user.component.ts");
const current_user_edit_component_1 = __webpack_require__(/*! ./users/current-user-edit/current-user-edit.component */ "./app/users/current-user-edit/current-user-edit.component.ts");
const settlement_component_1 = __webpack_require__(/*! ./expenses/settlement/settlement.component */ "./app/expenses/settlement/settlement.component.ts");
const dashboard_component_1 = __webpack_require__(/*! ./users/dashboard/dashboard.component */ "./app/users/dashboard/dashboard.component.ts");
const friend_create_component_1 = __webpack_require__(/*! ./friends/friend-create/friend-create.component */ "./app/friends/friend-create/friend-create.component.ts");
const friend_edit_component_1 = __webpack_require__(/*! ./friends/friend-edit/friend-edit.component */ "./app/friends/friend-edit/friend-edit.component.ts");
const friend_list_component_1 = __webpack_require__(/*! ./friends/friend-list/friend-list.component */ "./app/friends/friend-list/friend-list.component.ts");
const nongroup_expense_component_1 = __webpack_require__(/*! ./expenses/nongroup-expense/nongroup-expense.component */ "./app/expenses/nongroup-expense/nongroup-expense.component.ts");
const nongroup_expense_list_component_1 = __webpack_require__(/*! ./expenses/nongroup-expense-list/nongroup-expense-list.component */ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.ts");
const activity_list_component_1 = __webpack_require__(/*! ./users/activity-list/activity-list.component */ "./app/users/activity-list/activity-list.component.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            expenses_module_1.ExpensesModule,
            friends_module_1.FriendsModule,
            groups_module_1.GroupsModule,
            users_module_1.UsersModule,
            router_1.RouterModule
                .forRoot([
                {
                    path: 'groups',
                    component: group_list_component_1.GroupListComponent
                },
                {
                    path: 'groups/:id',
                    component: group_details_component_1.GroupDetailsComponent
                },
                {
                    path: 'create-group',
                    component: group_create_component_1.GroupCreateComponent
                },
                {
                    path: 'groups/:id/edit-group',
                    component: group_edit_component_1.GroupEditComponent
                },
                {
                    path: 'groups/:id/add-member',
                    component: add_member_component_1.AddMemberComponent
                },
                {
                    path: 'groups/:groupId/expenses',
                    component: expense_list_component_1.ExpenseListComponent
                },
                {
                    path: 'groups/:groupId/expenses/:expenseId/edit-expense',
                    component: expense_edit_component_1.ExpenseEditComponent
                },
                {
                    path: 'groups/:groupId/create-expense',
                    component: expense_create_component_1.ExpenseCreateComponent
                },
                {
                    path: 'groups/:groupId/settlement',
                    component: settlement_component_1.SettlementComponent
                },
                {
                    path: 'current-user',
                    component: current_user_component_1.CurrentUserComponent
                },
                {
                    path: 'current-user/edit',
                    component: current_user_edit_component_1.CurrentUserEditComponent
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'user/:id/add-friend',
                    component: friend_create_component_1.FriendCreateComponent
                },
                {
                    path: 'user/:userId/friends/:friendId',
                    component: friend_edit_component_1.FriendEditComponent
                },
                {
                    path: 'user/:userId/friends',
                    component: friend_list_component_1.FriendListComponent
                },
                {
                    path: 'nongroup-expense',
                    component: nongroup_expense_list_component_1.NongroupExpenseListComponent
                },
                {
                    path: 'nongroup-expense/create',
                    component: nongroup_expense_component_1.NongroupExpenseComponent
                },
                {
                    path: 'settlement',
                    component: settlement_component_1.SettlementComponent
                },
                {
                    path: 'current-user/activities',
                    component: activity_list_component_1.ActivityListComponent
                },
                {
                    path: '',
                    redirectTo: 'dashboard',
                    pathMatch: 'full'
                }
            ])
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./app/expenses/expense-create/expense-create.component.css":
/*!******************************************************************!*\
  !*** ./app/expenses/expense-create/expense-create.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    font-weight: bold;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC9hcHAvZXhwZW5zZXMvZXhwZW5zZS1jcmVhdGUvZXhwZW5zZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQXBwL2FwcC9leHBlbnNlcy9leHBlbnNlLWNyZWF0ZS9leHBlbnNlLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/expenses/expense-create/expense-create.component.html":
/*!*******************************************************************!*\
  !*** ./app/expenses/expense-create/expense-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width:60%; text-align: center;\" *ngIf=\"isAvailable\">\r\n    <h3>Add Expense</h3>\r\n    <h2> {{ groupDetails.GroupName }} ({{ groupDetails.DateCreated | date: 'medium' }})</h2>\r\n\r\n    <form #form=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"container\" style=\"margin-top: 7%;\">\r\n            <div class=\"form-group\">\r\n                <label style=\"font-size: large;\">Expense On</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"expenseData.Name\" placeholder=\"Expense name\" required />\r\n            </div>\r\n\r\n            <div class=\"container\" style=\"padding:25px; margin-top: 5%; border-radius: 5px; box-shadow: 5px 5px 8px #777\">\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label>Amount</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"Amount\" [(ngModel)]=\"expenseData.Amount\" placeholder=\"Enter amount\" required />\r\n                </div>\r\n                <div class=\"form-group col-xs-6\" style=\"margin: 0px 0px 5% 0px;\">\r\n                    <label>Date</label>\r\n                    <input type=\"datetime-local\" class=\"form-control\" name=\"Date\" [(ngModel)]=\"expenseData.Date\" required />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Paid By</label>\r\n                    <select class=\"form-control\" style=\"margin-bottom: 10%;\" name=\"Payee\" [(ngModel)]=\"expenseData.Payee\" required>\r\n                        <option selected disabled value=\"\">--Select--</option>\r\n                        <option *ngFor=\"let users of groupDetails.GroupUsers\" [value]=\"users.Id\"> {{ users.FullName }} </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label style=\"font-size: medium;\">Include</label>\r\n                    <div class=\"form-check\" style=\"margin-bottom: 3%;\" *ngFor=\"let users of groupDetails.GroupUsers\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" (click)=\"UserInclude(users.Id, users.FullName)\" required>\r\n                        <label class=\"form-check-label\">\r\n                            &nbsp; {{ users.FullName }}\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label style=\"font-size: medium;\">Split As</label><br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseData.SplitType\" (change)=\"OnSplitSelect()\" value=\"Equal\"> Equal<br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseData.SplitType\" (change)=\"OnSplitSelect()\" value=\"Exact\"> Exact Amount<br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseData.SplitType\" (change)=\"OnSplitSelect()\" value=\"Percentage\"> Percentage\r\n                </div>\r\n            </div>\r\n            <div class=\"container\" style=\"margin: 5% 0px 5% 0px;\">\r\n                <div *ngIf=\"expenseData.SplitType === 'Equal'\">\r\n                    <h3>Equally</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Amount</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseData.IncludedUsers\" >\r\n                                <td>{{user.UserName}}</td>\r\n                                <td><input type=\"text\" class=\"form-control\" #EqualAmount placeholder=\"Amount\" readonly\r\n                                           name=\"UserAmount\" [(ngModel)]=\"user.UserAmount\" /></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"expenseData.SplitType === 'Exact'\">\r\n                    <h3>Exact Amount</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Amount</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseData.IncludedUsers\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td><input type=\"text\" class=\"form-control\" #ExactAmount placeholder=\"Enter amount\"\r\n                                           name=\"UserAmount\" [(ngModel)]=\"user.UserAmount\" /></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"expenseData.SplitType === 'Percentage'\">\r\n                    <h3>Percentage</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Percentage</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseData.IncludedUsers\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td><input type=\"text\" class=\"form-control\" #Percentage placeholder=\"Enter percentage\"\r\n                                           name=\"Percentage\" [(ngModel)]=\"user.Percentage\" /></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <textarea class=\"form-control rounded-0\" rows=\"3\" cols=\"15\" name=\"Note\" [(ngModel)]=\"expenseData.Note\" placeholder=\"Notes\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"OnSubmit()\" style=\"margin-top: 3%;\" [disabled]=\"form.invalid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./app/expenses/expense-create/expense-create.component.ts":
/*!*****************************************************************!*\
  !*** ./app/expenses/expense-create/expense-create.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ../../groups/shared/group.service */ "./app/groups/shared/group.service.ts");
const expense_model_1 = __webpack_require__(/*! ../shared/expense.model */ "./app/expenses/shared/expense.model.ts");
const expenses_service_1 = __webpack_require__(/*! ../shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const group_model_1 = __webpack_require__(/*! ../../groups/shared/group.model */ "./app/groups/shared/group.model.ts");
let ExpenseCreateComponent = class ExpenseCreateComponent {
    constructor(_groupService, _expenseService, _route, _router) {
        this._groupService = _groupService;
        this._expenseService = _expenseService;
        this._route = _route;
        this._router = _router;
        this.groupId = +this._route.snapshot.paramMap.get('groupId');
        this.groupDetails = new group_model_1.GroupDetails();
        this.expenseData = new expense_model_1.ExpenseModel();
        this.isAvailable = false;
    }
    ngOnInit() {
        this._groupService.GetGroupById(this.groupId).subscribe(res => {
            this.groupDetails = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
    }
    UserInclude(userId, userName) {
        let users = new expense_model_1.IncludedUser(userId, userName, null, null);
        if (this.expenseData.IncludedUsers.some(n => n.UserID === userId)) {
            this.expenseData.IncludedUsers.splice(this.expenseData.IncludedUsers.findIndex(u => u.UserID === userId), 1);
        }
        else {
            this.expenseData.IncludedUsers.push(users);
        }
        this.OnSplitSelect();
    }
    OnSplitSelect() {
        if (this.expenseData.SplitType === 'Equal') {
            for (let i = 0; i < this.expenseData.IncludedUsers.length; i++) {
                this.expenseData.IncludedUsers[i].UserAmount = (this.expenseData.Amount / this.expenseData.IncludedUsers.length);
            }
        }
        else {
            for (let i = 0; i < this.expenseData.IncludedUsers.length; i++) {
                this.expenseData.IncludedUsers[i].UserAmount = null;
            }
        }
    }
    OnSubmit() {
        this._expenseService.PostExpense(this.groupId, this.expenseData).subscribe(res => {
            this._router.navigate(['/groups/' + this.groupId]);
        }, err => {
            debugger;
        });
    }
};
ExpenseCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-expense-create',
        template: __webpack_require__(/*! ./expense-create.component.html */ "./app/expenses/expense-create/expense-create.component.html"),
        styles: [__webpack_require__(/*! ./expense-create.component.css */ "./app/expenses/expense-create/expense-create.component.css")]
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService, expenses_service_1.ExpenseService, router_1.ActivatedRoute, router_1.Router])
], ExpenseCreateComponent);
exports.ExpenseCreateComponent = ExpenseCreateComponent;


/***/ }),

/***/ "./app/expenses/expense-details/expense-details.component.css":
/*!********************************************************************!*\
  !*** ./app/expenses/expense-details/expense-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2V4cGVuc2VzL2V4cGVuc2UtZGV0YWlscy9leHBlbnNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/expenses/expense-details/expense-details.component.html":
/*!*********************************************************************!*\
  !*** ./app/expenses/expense-details/expense-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  expense-details works!\n</p>\n"

/***/ }),

/***/ "./app/expenses/expense-details/expense-details.component.ts":
/*!*******************************************************************!*\
  !*** ./app/expenses/expense-details/expense-details.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let ExpenseDetailsComponent = class ExpenseDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExpenseDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-expense-details',
        template: __webpack_require__(/*! ./expense-details.component.html */ "./app/expenses/expense-details/expense-details.component.html"),
        styles: [__webpack_require__(/*! ./expense-details.component.css */ "./app/expenses/expense-details/expense-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExpenseDetailsComponent);
exports.ExpenseDetailsComponent = ExpenseDetailsComponent;


/***/ }),

/***/ "./app/expenses/expense-edit/expense-edit.component.css":
/*!**************************************************************!*\
  !*** ./app/expenses/expense-edit/expense-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2V4cGVuc2VzL2V4cGVuc2UtZWRpdC9leHBlbnNlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/expenses/expense-edit/expense-edit.component.html":
/*!***************************************************************!*\
  !*** ./app/expenses/expense-edit/expense-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 60%; text-align: center;\" *ngIf=\"groupAvailable\">\r\n    <h3>Edit Expense</h3>\r\n    <h3> {{ groupDetails.GroupName }} ({{ groupDetails.DateCreated | date: 'medium' }})</h3>\r\n\r\n    <form>\r\n        <div class=\"container\" style=\"margin-top: 7%;\" *ngIf=\"expenseAvailable\">\r\n            <div class=\"form-group\">\r\n                <label style=\"font-size: large;\">Expense On</label>\r\n                <input type=\"text\" class=\"form-control\"\r\n                       name=\"ExpenseName\" [(ngModel)]=\"expenseDetails.ExpenseName\" />\r\n            </div>\r\n\r\n            <div class=\"container\" style=\"padding:25px; margin-top: 5%; border-radius: 5px; box-shadow: 5px 5px 8px #777\">\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label>Amount</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"TotalAmount\" placeholder=\"Enter amount\"\r\n                           [(ngModel)]=\"expenseDetails.TotalAmount\" (change)=\"OnSplitChange()\" />\r\n                </div>\r\n                <div class=\"form-group col-xs-6\" style=\"margin: 0px 0px 5% 0px;\">\r\n                    <label>Date</label>\r\n                    <input type=\"datetime-local\" class=\"form-control\"\r\n                           name=\"Date\" [(ngModel)]=\"expenseDetails.Date\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Paid By</label>\r\n                    <select class=\"form-control\" style=\"margin-bottom: 10%;\"\r\n                            name=\"Payee\" [(ngModel)]=\"expenseDetails.PayeeID\" required>\r\n                        <option *ngFor=\"let users of groupDetails.GroupUsers\" [value]=\"users.Id\" [selected]=\"users.Id === expenseDetails.PayeeID\"> {{ users.FullName }} </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label style=\"font-size: medium;\">Include</label>\r\n                    <div class=\"form-check\" style=\"margin-bottom: 3%;\" *ngFor=\"let users of groupDetails.GroupUsers\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"IsChecked(users.Id)\" (change)=\"UserHandle(users.Id, users.FullName)\" />\r\n                        <label class=\"form-check-label\">\r\n                            &nbsp; {{ users.FullName }}\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label style=\"font-size: medium;\">Split As</label><br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseDetails.SplitType\" (change)=\"OnSplitChange()\" value=\"Equal\"> Equal<br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseDetails.SplitType\" (change)=\"OnSplitChange()\" value=\"Exact\"> Exact Amount<br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseDetails.SplitType\" (change)=\"OnSplitChange()\" value=\"Percentage\"> Percentage\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"container\" style=\"margin: 5% 0px 5% 0px;\">\r\n                <div *ngIf=\"expenseDetails.SplitType === 'Equal'\">\r\n                    <h3>Equally</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Amount</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseDetails.Payer; let i = index;\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" #EqualAmount placeholder=\"Amount\"\r\n                                           name=\"UserAmount{{i}}\" [(ngModel)]=\"user.UserAmount\" />\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"expenseDetails.SplitType === 'Exact'\">\r\n                    <h3>Exact Amount</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Amount</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseDetails.Payer; let i = index;\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" #ExactAmount placeholder=\"Amount\"\r\n                                           name=\"UserAmount{{i}}\" [(ngModel)]=\"user.UserAmount\" />\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"expenseDetails.SplitType === 'Percentage'\">\r\n                    <h3>Percentage</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Percentage(%)</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseDetails.Payer; let i = index;\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" #Percentage placeholder=\"Enter Percentage\"\r\n                                           name=\"Percentage{{i}}\" [(ngModel)]=\"user.Percentage\" />\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <textarea class=\"form-control rounded-0\" rows=\"3\" cols=\"15\" placeholder=\"Notes\"\r\n                          name=\"Note\" [(ngModel)]=\"expenseDetails.Note\">\r\n\r\n                </textarea>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\">Edit and Save</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./app/expenses/expense-edit/expense-edit.component.ts":
/*!*************************************************************!*\
  !*** ./app/expenses/expense-edit/expense-edit.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const expenses_service_1 = __webpack_require__(/*! ../shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ../../groups/shared/group.service */ "./app/groups/shared/group.service.ts");
const expense_model_1 = __webpack_require__(/*! ../shared/expense.model */ "./app/expenses/shared/expense.model.ts");
const group_model_1 = __webpack_require__(/*! ../../groups/shared/group.model */ "./app/groups/shared/group.model.ts");
let ExpenseEditComponent = class ExpenseEditComponent {
    constructor(_expenseService, _groupService, _route, _router) {
        this._expenseService = _expenseService;
        this._groupService = _groupService;
        this._route = _route;
        this._router = _router;
        this.groupId = +this._route.snapshot.paramMap.get('groupId');
        this.expenseId = +this._route.snapshot.paramMap.get('expenseId');
        this.groupDetails = new group_model_1.GroupDetails();
        this.groupAvailable = false;
        this.expenseAvailable = false;
    }
    ngOnInit() {
        this._expenseService.GetExpenseById(this.groupId, this.expenseId).subscribe(res => {
            this.expenseDetails = res;
            this.expenseAvailable = true;
        }, err => {
            debugger;
        });
        this._groupService.GetGroupById(this.groupId).subscribe(res => {
            this.groupDetails = res;
            this.groupAvailable = true;
        }, err => {
            debugger;
        });
    }
    IsChecked(id) {
        if (this.expenseDetails.Payer.some(n => n.UserID === id)) {
            return true;
        }
        else
            return false;
    }
    UserHandle(userId, userName) {
        let users = new expense_model_1.IncludedUser(userId, userName, null, null);
        if (this.expenseDetails.Payer.some(n => n.UserID === userId)) {
            this.expenseDetails.Payer.splice(this.expenseDetails.Payer.findIndex(u => u.UserID === userId), 1);
        }
        else {
            this.expenseDetails.Payer.push(users);
        }
        this.OnSplitChange();
    }
    OnSplitChange() {
        if (this.expenseDetails.SplitType === 'Equal') {
            for (let i = 0; i < this.expenseDetails.Payer.length; i++) {
                this.expenseDetails.Payer[i].UserAmount = (this.expenseDetails.TotalAmount / this.expenseDetails.Payer.length);
            }
        }
        else {
            for (let i = 0; i < this.expenseDetails.Payer.length; i++) {
                this.expenseDetails.Payer[i].UserAmount = null;
                this.expenseDetails.Payer[i].Percentage = null;
            }
        }
    }
    onSubmit() {
        this._expenseService.EditExpense(this.groupId, this.expenseDetails).subscribe(res => {
            this._router.navigate(['/groups/' + this.groupId]);
        }, err => {
            debugger;
        });
    }
};
ExpenseEditComponent = __decorate([
    core_1.Component({
        selector: 'app-expense-edit',
        template: __webpack_require__(/*! ./expense-edit.component.html */ "./app/expenses/expense-edit/expense-edit.component.html"),
        styles: [__webpack_require__(/*! ./expense-edit.component.css */ "./app/expenses/expense-edit/expense-edit.component.css")]
    }),
    __metadata("design:paramtypes", [expenses_service_1.ExpenseService, group_service_1.GroupService, router_1.ActivatedRoute, router_1.Router])
], ExpenseEditComponent);
exports.ExpenseEditComponent = ExpenseEditComponent;


/***/ }),

/***/ "./app/expenses/expense-list/expense-list.component.css":
/*!**************************************************************!*\
  !*** ./app/expenses/expense-list/expense-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2V4cGVuc2VzL2V4cGVuc2UtbGlzdC9leHBlbnNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/expenses/expense-list/expense-list.component.html":
/*!***************************************************************!*\
  !*** ./app/expenses/expense-list/expense-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 70%; text-align: center;\" *ngIf=\"isAvailable\">\n    <div class=\"container\">\r\n        <h4>{{ groupDetails.GroupName }} ( {{ groupDetails.DateCreated | date: 'medium' }} )</h4>\r\n\r\n        <table class=\"table table-striped\" style=\"padding: 5px; margin-top: 5%;\">\r\n            <thead>\r\n                <tr style=\"font-weight: bold; text-transform: uppercase\">\r\n                    <td>Expense Name</td>\r\n                    <td>Paid By</td>\r\n                    <td>Payer</td>\r\n                    <td>Amount</td>\r\n                    <td></td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let expense of expenseList\">\r\n                    <td style=\"font-weight: bold;\">{{expense.ExpenseName}}</td>\r\n                    <td>{{expense.Payee}}</td>\r\n                    <td>{{expense.Payer}}</td>\r\n                    <td>{{expense.Amount}}</td>\r\n                    <td><button class=\"btn btn-danger btn-sm\" (click)=\"DeleteExpense(groupId, expense.ID)\">Delete</button></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <a class=\"btn btn-primary\" style=\"margin-top: 5%;\" [routerLink]=\"['/groups',groupId]\">Back</a>\r\n    </div>\n</div>\n"

/***/ }),

/***/ "./app/expenses/expense-list/expense-list.component.ts":
/*!*************************************************************!*\
  !*** ./app/expenses/expense-list/expense-list.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const expenses_service_1 = __webpack_require__(/*! ../shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ../../groups/shared/group.service */ "./app/groups/shared/group.service.ts");
const group_model_1 = __webpack_require__(/*! ../../groups/shared/group.model */ "./app/groups/shared/group.model.ts");
let ExpenseListComponent = class ExpenseListComponent {
    constructor(_expenseService, _groupService, _route, _router) {
        this._expenseService = _expenseService;
        this._groupService = _groupService;
        this._route = _route;
        this._router = _router;
        this.groupId = +this._route.snapshot.paramMap.get('groupId');
        this.groupDetails = new group_model_1.GroupDetails();
        this.expenseList = [];
        this.isAvailable = false;
    }
    ngOnInit() {
        this._expenseService.GetAllExpenses(this.groupId).subscribe(res => {
            this.expenseList = res;
        }, err => {
            debugger;
        });
        this._groupService.GetGroupById(this.groupId).subscribe(res => {
            this.groupDetails = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
    }
    DeleteExpense(groupId, expenseId) {
        this._expenseService.RemoveExpense(groupId, expenseId).subscribe(res => {
            this._router.navigate(['/groups/' + groupId]);
        }, err => {
            debugger;
        });
    }
};
ExpenseListComponent = __decorate([
    core_1.Component({
        selector: 'app-expense-list',
        template: __webpack_require__(/*! ./expense-list.component.html */ "./app/expenses/expense-list/expense-list.component.html"),
        styles: [__webpack_require__(/*! ./expense-list.component.css */ "./app/expenses/expense-list/expense-list.component.css")]
    }),
    __metadata("design:paramtypes", [expenses_service_1.ExpenseService, group_service_1.GroupService, router_1.ActivatedRoute, router_1.Router])
], ExpenseListComponent);
exports.ExpenseListComponent = ExpenseListComponent;


/***/ }),

/***/ "./app/expenses/expenses.module.ts":
/*!*****************************************!*\
  !*** ./app/expenses/expenses.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const expense_list_component_1 = __webpack_require__(/*! ./expense-list/expense-list.component */ "./app/expenses/expense-list/expense-list.component.ts");
const expense_details_component_1 = __webpack_require__(/*! ./expense-details/expense-details.component */ "./app/expenses/expense-details/expense-details.component.ts");
const expense_create_component_1 = __webpack_require__(/*! ./expense-create/expense-create.component */ "./app/expenses/expense-create/expense-create.component.ts");
const expense_edit_component_1 = __webpack_require__(/*! ./expense-edit/expense-edit.component */ "./app/expenses/expense-edit/expense-edit.component.ts");
const settlement_component_1 = __webpack_require__(/*! ./settlement/settlement.component */ "./app/expenses/settlement/settlement.component.ts");
const expenses_service_1 = __webpack_require__(/*! ./shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const nongroup_expense_component_1 = __webpack_require__(/*! ./nongroup-expense/nongroup-expense.component */ "./app/expenses/nongroup-expense/nongroup-expense.component.ts");
const nongroup_expense_list_component_1 = __webpack_require__(/*! ./nongroup-expense-list/nongroup-expense-list.component */ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.ts");
let ExpensesModule = class ExpensesModule {
};
ExpensesModule = __decorate([
    core_1.NgModule({
        declarations: [expense_list_component_1.ExpenseListComponent, expense_details_component_1.ExpenseDetailsComponent, expense_create_component_1.ExpenseCreateComponent, expense_edit_component_1.ExpenseEditComponent, settlement_component_1.SettlementComponent, nongroup_expense_component_1.NongroupExpenseComponent, nongroup_expense_list_component_1.NongroupExpenseListComponent],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        providers: [expenses_service_1.ExpenseService]
    })
], ExpensesModule);
exports.ExpensesModule = ExpensesModule;


/***/ }),

/***/ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.css":
/*!********************************************************************************!*\
  !*** ./app/expenses/nongroup-expense-list/nongroup-expense-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2V4cGVuc2VzL25vbmdyb3VwLWV4cGVuc2UtbGlzdC9ub25ncm91cC1leHBlbnNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.html":
/*!*********************************************************************************!*\
  !*** ./app/expenses/nongroup-expense-list/nongroup-expense-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"text-align: center;\">\n    <h3>Non Group Expenses</h3>\n\n    <div class=\"container\">\r\n        <table class=\"table table-striped\" style=\"padding: 5px; margin-top: 5%;\">\r\n            <thead>\r\n                <tr style=\"font-weight: bold; text-transform: uppercase\">\r\n                    <td>Expense Name</td>\r\n                    <td>Paid By</td>\r\n                    <td>Payer</td>\r\n                    <td>Amount</td>\r\n                    <td></td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let expense of expenseList\">\r\n                    <td style=\"font-weight: bold;\">{{expense.ExpenseName}}</td>\r\n                    <td>{{expense.Payee}}</td>\r\n                    <td>{{expense.Payer}}</td>\r\n                    <td>{{expense.Amount}}</td>\r\n                    <td><button class=\"btn btn-danger btn-sm\" (click)=\"DeleteExpense(expense.ID)\">Delete</button></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\" style=\"margin-top: 3%;\">\r\n            <a class=\"btn btn-success\" [routerLink]=\"['/nongroup-expense/create']\">New Nongroup Expense</a>\r\n        </div>\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/groups']\">Back</a>\r\n    </div>\n</div>\n"

/***/ }),

/***/ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./app/expenses/nongroup-expense-list/nongroup-expense-list.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const expenses_service_1 = __webpack_require__(/*! ../shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
let NongroupExpenseListComponent = class NongroupExpenseListComponent {
    constructor(_expenseService) {
        this._expenseService = _expenseService;
        this.expenseList = [];
    }
    ngOnInit() {
        this._expenseService.GetNonGroupExpense().subscribe(res => {
            this.expenseList = res;
            console.log(this.expenseList);
        }, err => {
            debugger;
        });
    }
    DeleteExpense(expenseId) {
        this._expenseService.RemoveExpense(0, expenseId).subscribe(res => {
            location.reload();
        }, err => {
            debugger;
        });
    }
};
NongroupExpenseListComponent = __decorate([
    core_1.Component({
        selector: 'app-nongroup-expense-list',
        template: __webpack_require__(/*! ./nongroup-expense-list.component.html */ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.html"),
        styles: [__webpack_require__(/*! ./nongroup-expense-list.component.css */ "./app/expenses/nongroup-expense-list/nongroup-expense-list.component.css")]
    }),
    __metadata("design:paramtypes", [expenses_service_1.ExpenseService])
], NongroupExpenseListComponent);
exports.NongroupExpenseListComponent = NongroupExpenseListComponent;


/***/ }),

/***/ "./app/expenses/nongroup-expense/nongroup-expense.component.css":
/*!**********************************************************************!*\
  !*** ./app/expenses/nongroup-expense/nongroup-expense.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2V4cGVuc2VzL25vbmdyb3VwLWV4cGVuc2Uvbm9uZ3JvdXAtZXhwZW5zZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/expenses/nongroup-expense/nongroup-expense.component.html":
/*!***********************************************************************!*\
  !*** ./app/expenses/nongroup-expense/nongroup-expense.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 60%; text-align: center;\">\r\n    <h3>Add Expense</h3>\r\n\r\n    <form autocomplete=\"off\">\r\n        <div class=\"container\" style=\"margin: 5% 0px 5% 0px;\">\r\n            <div class=\"form-group\">\r\n                <label style=\"font-size: large;\">Expense On</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Expense name\"\r\n                       name=\"Name\" [(ngModel)]=\"expenseData.Name\" />\r\n            </div>\r\n\r\n            <div class=\"container\" style=\"padding:25px; margin-top: 5%; border-radius: 5px; box-shadow: 5px 5px 8px #777\">\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label>Amount</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter amount\"\r\n                           name=\"Amount\" [(ngModel)]=\"expenseData.Amount\" />\r\n                </div>\r\n                <div class=\"form-group col-xs-6\" style=\"margin: 0px 0px 5% 0px;\">\r\n                    <label>Date</label>\r\n                    <input type=\"datetime-local\" class=\"form-control\"\r\n                           name=\"Date\" [(ngModel)]=\"expenseData.Date\" />\r\n                </div>\r\n\r\n                <!--<div class=\"form-group\">\r\n                    <label>Paid By</label>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\"\r\n                               name=\"Payee\" [(ngModel)]=\"expenseData.Payee\" (change)=\"AddUser(expenseData.Payee)\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <h4 style=\"margin-top: 5%;\">Include Users</h4>\r\n\r\n                <table class=\"table table-bordered table-striped\">\r\n                    <tbody>\r\n                        <tr *ngFor=\"let user of expenseData.IncludedUsers; let i = index;\">\r\n                            <td>{{i+1}}. {{user.UserName}}</td>\r\n                            <td><button class=\"btn btn-danger btn-sm\" (click)=\"RemoveUser(user.UserName)\">Remove</button></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <div class=\"form-group\" style=\"margin-top: 5%;\">\r\n                    <input #UserName class=\"form-control\" placeholder=\"Email Address\" />\r\n                </div>-->\r\n                <!--<a class=\"btn btn-primary\" (click)=\"AddUser(UserName.value)\">Add User</a>-->\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Paid By</label>\r\n                    <select class=\"form-control\"\r\n                            name=\"Payee\" [(ngModel)]=\"expenseData.Payee\" (change)=\"getAllFriends(expenseData.Payee)\" required>\r\n                        <option selected disabled value=\"\">--Select--</option>\r\n                        <option [value]=\"currentUserData.Id\" *ngIf=\"currentUser\">{{currentUserData.FullName}}</option>\r\n                        <option [value]=\"individualUserData.Id\" *ngIf=\"individualUser\">{{individualUserData.FullName}}</option>\r\n                        <option *ngFor=\"let user of friendList\" [value]=\"user.Id\">{{user.FullName}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-xs-6\" *ngIf=\"friendsAvailable\">\r\n                    <label style=\"font-size: medium;\">Include</label>\r\n                    <div class=\"form-check\" style=\"margin-bottom: 3%;\" *ngFor=\"let users of friendList\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" (click)=\"AddUser(users.Id, users.FullName)\">\r\n                        <label class=\"form-check-label\">\r\n                            &nbsp; {{ users.FullName }}\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" style=\"margin: 5% 0px 5% 0px\">\r\n                    <label style=\"font-size: medium;\">Split As</label><br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseData.SplitType\" (change)=\"SplitSelect()\" value=\"Equal\"> Equal<br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseData.SplitType\" (change)=\"SplitSelect()\" value=\"Exact\"> Exact Amount<br />\r\n                    <input type=\"radio\" name=\"splittype\" [(ngModel)]=\"expenseData.SplitType\" (change)=\"SplitSelect()\" value=\"Percentage\"> Percentage\r\n                </div>\r\n            </div>\r\n            <div class=\"container\" style=\"margin: 5% 0px 5% 0px;\">\r\n                <div *ngIf=\"expenseData.SplitType === 'Equal'\">\r\n                    <h3>Equally</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Amount</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseData.IncludedUsers\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" #EqualAmount placeholder=\"Amount\" readonly\r\n                                           name=\"UserAmount\" [(ngModel)]=\"user.UserAmount\" />\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"expenseData.SplitType === 'Exact'\">\r\n                    <h3>Exact Amount</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Amount</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseData.IncludedUsers\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" #ExactAmount placeholder=\"Enter amount\"\r\n                                           name=\"UserAmount\" [(ngModel)]=\"user.UserAmount\" />\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"expenseData.SplitType === 'Percentage'\">\r\n                    <h3>Percentage</h3>\r\n                    <table class=\"table table-striped table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>User</td>\r\n                                <td>Percentage</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of expenseData.IncludedUsers\">\r\n                                <td>{{user.UserName}}</td>\r\n                                <td>\r\n                                    <input type=\"text\" class=\"form-control\" #Percentage placeholder=\"Enter percentage\"\r\n                                           name=\"Percentage\" [(ngModel)]=\"user.Percentage\" />\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <textarea class=\"form-control rounded-0\" rows=\"3\" cols=\"15\" name=\"Note\" [(ngModel)]=\"expenseData.Note\" placeholder=\"Notes\"></textarea>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"Submit()\">Save</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./app/expenses/nongroup-expense/nongroup-expense.component.ts":
/*!*********************************************************************!*\
  !*** ./app/expenses/nongroup-expense/nongroup-expense.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const expense_model_1 = __webpack_require__(/*! ../shared/expense.model */ "./app/expenses/shared/expense.model.ts");
const expenses_service_1 = __webpack_require__(/*! ../shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const user_model_1 = __webpack_require__(/*! ../../users/shared/user.model */ "./app/users/shared/user.model.ts");
const user_service_1 = __webpack_require__(/*! ../../users/shared/user.service */ "./app/users/shared/user.service.ts");
let NongroupExpenseComponent = class NongroupExpenseComponent {
    constructor(_userService, _expenseService, _router) {
        this._userService = _userService;
        this._expenseService = _expenseService;
        this._router = _router;
        this.expenseData = new expense_model_1.ExpenseModel();
        this.currentUserData = new user_model_1.UserDetails();
        this.friendList = [];
        this.individualUserData = new user_model_1.UserDetails();
        this.friendsAvailable = false;
        this.currentUser = false;
        this.individualUser = false;
    }
    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(res => {
            this.currentUserData = res;
            this.currentUser = true;
        }, err => {
            debugger;
        });
    }
    AddUser(userId, userName) {
        let users = new expense_model_1.IncludedUser(userId, userName, null, null);
        if (this.expenseData.IncludedUsers.some(n => n.UserID === userId)) {
            this.expenseData.IncludedUsers.splice(this.expenseData.IncludedUsers.findIndex(u => u.UserID === userId), 1);
        }
        else {
            this.expenseData.IncludedUsers.push(users);
        }
        this.SplitSelect();
        console.log(this.expenseData.IncludedUsers);
    }
    getAllFriends(userId) {
        this.expenseData.IncludedUsers = [];
        this.individualUserData = new user_model_1.UserDetails();
        if (userId !== this.currentUserData.Id) {
            this.currentUser = false;
            this._userService.GetUserById(userId).subscribe(res => {
                this.individualUserData = res;
                this.individualUser = true;
                let users = new expense_model_1.IncludedUser(userId, this.individualUserData.FullName, null, null);
                this.expenseData.IncludedUsers.push(users);
            }, err => {
                debugger;
            });
        }
        else {
            this.currentUser = true;
            this.individualUser = false;
            let users = new expense_model_1.IncludedUser(userId, this.currentUserData.FullName, null, null);
            this.expenseData.IncludedUsers.push(users);
        }
        this._userService.GetAllFriends(userId).subscribe(res => {
            this.friendList = res;
            this.friendsAvailable = true;
        }, err => {
            debugger;
        });
    }
    SplitSelect() {
        if (this.expenseData.SplitType === 'Equal') {
            for (let i = 0; i < this.expenseData.IncludedUsers.length; i++) {
                this.expenseData.IncludedUsers[i].UserAmount = (this.expenseData.Amount / this.expenseData.IncludedUsers.length);
            }
        }
        else {
            for (let i = 0; i < this.expenseData.IncludedUsers.length; i++) {
                this.expenseData.IncludedUsers[i].UserAmount = null;
            }
        }
    }
    Submit() {
        this._expenseService.PostExpense(0, this.expenseData).subscribe(res => {
            this._router.navigate(['/nongroup-expense']);
        }, err => {
            debugger;
        });
    }
};
__decorate([
    core_1.ViewChild('UserName'),
    __metadata("design:type", core_1.ElementRef)
], NongroupExpenseComponent.prototype, "UserName", void 0);
NongroupExpenseComponent = __decorate([
    core_1.Component({
        selector: 'app-nongroup-expense',
        template: __webpack_require__(/*! ./nongroup-expense.component.html */ "./app/expenses/nongroup-expense/nongroup-expense.component.html"),
        styles: [__webpack_require__(/*! ./nongroup-expense.component.css */ "./app/expenses/nongroup-expense/nongroup-expense.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, expenses_service_1.ExpenseService, router_1.Router])
], NongroupExpenseComponent);
exports.NongroupExpenseComponent = NongroupExpenseComponent;


/***/ }),

/***/ "./app/expenses/settlement/settlement.component.css":
/*!**********************************************************!*\
  !*** ./app/expenses/settlement/settlement.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2V4cGVuc2VzL3NldHRsZW1lbnQvc2V0dGxlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/expenses/settlement/settlement.component.html":
/*!***********************************************************!*\
  !*** ./app/expenses/settlement/settlement.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" *ngIf=\"isAvailable\"\r\n     style=\"width: 60%; text-align: center; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\">\r\n    <h3>Settle Up</h3>\r\n    <form #form=\"ngForm\">\r\n        <div class=\"container\" style=\"margin-top: 5%;\">\r\n            <div class=\"form-group\">\r\n                <label>Select your group</label>\r\n                <select class=\"form-control\"\r\n                        name=\"GroupID\" [(ngModel)]=\"settlementData.GroupID\" required>\r\n                    <option selected disabled value=\"null\">--Select--</option>\r\n                    <option [ngValue]=\"0\">Non Group</option>\r\n                    <option *ngFor=\"let group of groupList\" [ngValue]=\"group.GroupID\">{{group.GroupName}}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div *ngIf=\"settlementData.GroupID === 0\">\r\n                <div class=\"form-group col-xs-4\">\r\n                    <label>Payer</label>\r\n                    <select class=\"form-control\"\r\n                            name=\"Payer\" [(ngModel)]=\"settlementData.Payer\" (change)=\"getAllFriends(settlementData.Payer)\" required>\r\n                        <option selected disabled value=\"\">--Select--</option>\r\n                        <option [value]=\"currentUserData.Id\" *ngIf=\"currentUser\">{{currentUserData.FullName}}</option>\r\n                        <option [value]=\"individualUserData.Id\" *ngIf=\"individualUser\">{{individualUserData.FullName}}</option>\r\n                        <option *ngFor=\"let user of friendList\" [value]=\"user.Id\">{{user.FullName}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-xs-4\">\r\n                    <h3 style=\"font-weight: bold;\">Paid</h3>\r\n                </div>\r\n                <div class=\"form-group col-xs-4\">\r\n                    <label>Payee</label>\r\n                    <select class=\"form-control\"\r\n                            name=\"Payee\" (change)=\"FetchExpense(settlementData.GroupID, settlementData.Payer, settlementData.Payee)\" [(ngModel)]=\"settlementData.Payee\" required>\r\n                        <option selected disabled value=\"\">--Select--</option>\r\n                        <option *ngFor=\"let user of friendList\" [value]=\"user.Id\">{{user.FullName}}</option>\r\n                    </select>\r\n                </div>\r\n                <small class=\"text-muted text-danger\" *ngIf=\"!expenseIsAvailable\">The payer and payee should be selected correctly.</small>\r\n            </div>\r\n\r\n            <div class=\"container\" *ngFor=\"let group of groupList\">\r\n                <div class=\"container\" style=\"margin: 5% 0px 5% 0px;\" *ngIf=\"group.GroupID === settlementData.GroupID\">\r\n                    <div class=\"form-group col-xs-4\">\r\n                        <label>Payer</label>\r\n                        <select class=\"form-control\"\r\n                                name=\"Payer\" (change)=\"FetchExpense(settlementData.GroupID, settlementData.Payer, settlementData.Payee)\" [(ngModel)]=\"settlementData.Payer\" required>\r\n                            <option selected disabled value=\"\">--Select--</option>\r\n                            <option *ngFor=\"let user of group.GroupUsers\" [value]=\"user.Id\">{{user.FullName}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group col-xs-4\">\r\n                        <h3 style=\"font-weight: bold;\">Paid</h3>\r\n                    </div>\r\n                    <div class=\"form-group col-xs-4\">\r\n                        <label>Payee</label>\r\n                        <select class=\"form-control\"\r\n                                name=\"Payee\" (change)=\"FetchExpense(settlementData.GroupID, settlementData.Payer, settlementData.Payee)\" [(ngModel)]=\"settlementData.Payee\" required>\r\n                            <option selected disabled value=\"\">--Select--</option>\r\n                            <ng-container *ngFor=\"let user of group.GroupUsers\">\r\n                                <option *ngIf=\"user.Id !== settlementData.Payer\" [value]=\"user.Id\">{{user.FullName}}</option>\r\n                            </ng-container>\r\n                        </select>\r\n                    </div>\r\n                    <small class=\"text-muted text-danger\" *ngIf=\"!expenseIsAvailable\">The payer and payee should be selected correctly.</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"expenseIsAvailable\">\r\n                <label>Amount</label>\r\n                <input type=\"number\" #Amount class=\"form-control\" name=\"Amount\" max=\"{{totalAmount}}\" required\r\n                       [(ngModel)]=\"settlementData.Amount\" />\r\n                <small class=\"text-muted text-danger\" *ngIf=\"(settlementData.Amount > totalAmount)\">The entered amount should be equal or less than debt.</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Date</label>\r\n                <input type=\"datetime-local\" class=\"form-control\" name=\"SettlementDate\" required\r\n                       [(ngModel)]=\"settlementData.SettlementDate\" />\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"Submit()\" [disabled]=\"form.invalid || (settlementData.Amount > totalAmount)\">Save</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./app/expenses/settlement/settlement.component.ts":
/*!*********************************************************!*\
  !*** ./app/expenses/settlement/settlement.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const group_service_1 = __webpack_require__(/*! ../../groups/shared/group.service */ "./app/groups/shared/group.service.ts");
const expense_model_1 = __webpack_require__(/*! ../shared/expense.model */ "./app/expenses/shared/expense.model.ts");
const expenses_service_1 = __webpack_require__(/*! ../shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const user_model_1 = __webpack_require__(/*! ../../users/shared/user.model */ "./app/users/shared/user.model.ts");
const user_service_1 = __webpack_require__(/*! ../../users/shared/user.service */ "./app/users/shared/user.service.ts");
let SettlementComponent = class SettlementComponent {
    constructor(_userService, _expenseService, _groupService, _router) {
        this._userService = _userService;
        this._expenseService = _expenseService;
        this._groupService = _groupService;
        this._router = _router;
        this.isAvailable = false;
        this.groupList = [];
        this.settlementData = new expense_model_1.SettlementData();
        this.expenseIsAvailable = false;
        this.currentUserData = new user_model_1.UserDetails();
        this.friendList = [];
        this.individualUserData = new user_model_1.UserDetails();
        this.friendsAvailable = false;
        this.currentUser = false;
        this.individualUser = false;
    }
    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(res => {
            this.currentUserData = res;
            this.currentUser = true;
        }, err => {
            debugger;
        });
        this._groupService.GetAllGroups().subscribe(res => {
            this.groupList = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
    }
    FetchExpense(groupId, payerId, payeeId) {
        this._expenseService.GetExpenseByUser(groupId, payerId, payeeId).subscribe(res => {
            this.settlementData.Amount = res;
            this.totalAmount = res;
            if (res > 0)
                this.expenseIsAvailable = true;
        }, err => {
            console.log(err);
        });
    }
    getAllFriends(userId) {
        this.individualUserData = new user_model_1.UserDetails();
        if (userId !== this.currentUserData.Id) {
            this.currentUser = false;
            this._userService.GetUserById(userId).subscribe(res => {
                this.individualUserData = res;
                this.individualUser = true;
            }, err => {
                debugger;
            });
        }
        else {
            this.currentUser = true;
            this.individualUser = false;
        }
        this._userService.GetAllFriends(userId).subscribe(res => {
            this.friendList = res;
            this.friendsAvailable = true;
        }, err => {
            debugger;
        });
        this.FetchExpense(this.settlementData.GroupID, this.settlementData.Payer, this.settlementData.Payee);
    }
    Submit() {
        this._expenseService.Settlement(this.settlementData).subscribe(res => {
            this._router.navigate(['/dashboard']);
        }, err => {
            debugger;
        });
    }
};
SettlementComponent = __decorate([
    core_1.Component({
        selector: 'app-settlement',
        template: __webpack_require__(/*! ./settlement.component.html */ "./app/expenses/settlement/settlement.component.html"),
        styles: [__webpack_require__(/*! ./settlement.component.css */ "./app/expenses/settlement/settlement.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, expenses_service_1.ExpenseService, group_service_1.GroupService, router_1.Router])
], SettlementComponent);
exports.SettlementComponent = SettlementComponent;


/***/ }),

/***/ "./app/expenses/shared/expense.model.ts":
/*!**********************************************!*\
  !*** ./app/expenses/shared/expense.model.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseModel {
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
exports.ExpenseModel = ExpenseModel;
class IncludedUser {
    constructor(UserID, UserName, UserAmount, Percentage) {
        this.UserID = UserID;
        this.UserName = UserName;
        this.UserAmount = UserAmount;
        this.Percentage = Percentage;
    }
}
exports.IncludedUser = IncludedUser;
class Expense {
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
exports.Expense = Expense;
class ExpenseDetails {
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
exports.ExpenseDetails = ExpenseDetails;
class SettlementData {
    constructor() {
        this.GroupID = null;
        this.Payee = '';
        this.Payer = '';
        this.Amount = 0;
        this.SettlementDate = null;
    }
}
exports.SettlementData = SettlementData;


/***/ }),

/***/ "./app/expenses/shared/expenses.service.ts":
/*!*************************************************!*\
  !*** ./app/expenses/shared/expenses.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
let ExpenseService = class ExpenseService {
    constructor(_http) {
        this._http = _http;
        this.URL = 'http://localhost:64169/api/Expense';
    }
    GetAllExpenses(groupId) {
        return this._http.get(this.URL + "/groups/" + groupId + "/expenses");
    }
    GetExpenseById(groupId, expenseId) {
        return this._http.get(this.URL + "/groups/" + groupId + "/expenses/" + expenseId);
    }
    GetExpenseByUser(groupId, payerId, payeeId) {
        return this._http.get(this.URL + "/groups/" + groupId + "/expenses/" + payerId + "/" + payeeId);
    }
    EditExpense(groupId, expenseData) {
        return this._http.put(this.URL + "/groups/" + groupId + '/expenses', expenseData);
    }
    PostExpense(groupId, expenseData) {
        return this._http.post(this.URL + "/groups/" + groupId + "/expenses", expenseData);
    }
    RemoveExpense(groupId, expenseId) {
        return this._http.delete(this.URL + "/groups/" + groupId + "/expenses/" + expenseId);
    }
    GetNonGroupExpense() {
        return this._http.get(this.URL + "/non-group-expenses");
    }
    Settlement(settlementData) {
        return this._http.post(this.URL + "/settlement", settlementData);
    }
};
ExpenseService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ExpenseService);
exports.ExpenseService = ExpenseService;


/***/ }),

/***/ "./app/friends/friend-create/friend-create.component.css":
/*!***************************************************************!*\
  !*** ./app/friends/friend-create/friend-create.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2ZyaWVuZHMvZnJpZW5kLWNyZWF0ZS9mcmllbmQtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/friends/friend-create/friend-create.component.html":
/*!****************************************************************!*\
  !*** ./app/friends/friend-create/friend-create.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 60%; text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\r\n    <h3>Friends</h3>\r\n    \r\n    <div class=\"container\" style=\"margin: 5% 0px 10% 0px; padding: 20px; border-radius: 5px; box-shadow: 5px 5px 8px #777\">\r\n        <div *ngFor=\"let user of friendList\">\r\n            <div class=\"form-group col-xs-6\">\r\n                <input type=\"text\" class=\"form-control\" [value]=\"user.FullName\" style=\"background-color: white\" readonly />\r\n            </div>\r\n            <div class=\"form-group col-xs-6\">\r\n                <input type=\"text\" class=\"form-control\" [value]=\"user.UserName\" style=\"background-color: white\" readonly />\r\n            </div>\r\n        </div>\r\n        <div *ngFor=\"let user of addedFriends\">\r\n            <div class=\"form-group col-xs-6\">\r\n                <input type=\"text\" class=\"form-control\" [value]=\"user.FullName\" style=\"background-color: white\" readonly />\r\n            </div>\r\n            <div class=\"form-group col-xs-6\">\r\n                <input type=\"text\" class=\"form-control\" [value]=\"user.UserName\" style=\"background-color: white\" readonly />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xs-6\" style=\"margin-top: 5%;\">\r\n            <input #FullName name=\"newlyAddedFulllName\" [(ngModel)]=\"newlyAddedFulllName\" class=\"form-control\" placeholder=\"Name\" />\r\n        </div>\r\n        <div class=\"form-group col-xs-6\" style=\"margin-top: 5%;\">\r\n            <input #UserName name=\"newlyAddedUserName\" [(ngModel)]=\"newlyAddedUserName\" class=\"form-control\" placeholder=\"Email Address\" />\r\n        </div>\r\n\r\n        <a class=\"btn btn-primary\" (click)=\"AddFriend(FullName.value,UserName.value)\" style=\"margin: 0px 0px 5% 0px;\">Add Friend</a>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"Submit()\">Save</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/friends/friend-create/friend-create.component.ts":
/*!**************************************************************!*\
  !*** ./app/friends/friend-create/friend-create.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const user_model_1 = __webpack_require__(/*! ../../users/shared/user.model */ "./app/users/shared/user.model.ts");
const user_service_1 = __webpack_require__(/*! ../../users/shared/user.service */ "./app/users/shared/user.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let FriendCreateComponent = class FriendCreateComponent {
    constructor(_userService, _route) {
        this._userService = _userService;
        this._route = _route;
        this.currentUserId = this._route.snapshot.paramMap.get('id');
        this.addedFriends = [];
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }
    ngOnInit() {
        this._userService.GetAllFriends(this.currentUserId).subscribe(res => {
            this.friendList = res;
        }, err => {
            debugger;
        });
    }
    AddFriend(fullName, userName) {
        let newlyAddedFriends = new user_model_1.UserDetails();
        newlyAddedFriends.Id = null;
        newlyAddedFriends.FullName = fullName;
        newlyAddedFriends.UserName = userName;
        this.addedFriends.push(newlyAddedFriends);
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }
    Submit() {
        this._userService.AddFriend(this.currentUserId, this.addedFriends).subscribe(res => {
            location.reload();
        }, err => {
            debugger;
        });
    }
};
FriendCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-friend-create',
        template: __webpack_require__(/*! ./friend-create.component.html */ "./app/friends/friend-create/friend-create.component.html"),
        styles: [__webpack_require__(/*! ./friend-create.component.css */ "./app/friends/friend-create/friend-create.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], FriendCreateComponent);
exports.FriendCreateComponent = FriendCreateComponent;


/***/ }),

/***/ "./app/friends/friend-edit/friend-edit.component.css":
/*!***********************************************************!*\
  !*** ./app/friends/friend-edit/friend-edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2ZyaWVuZHMvZnJpZW5kLWVkaXQvZnJpZW5kLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/friends/friend-edit/friend-edit.component.html":
/*!************************************************************!*\
  !*** ./app/friends/friend-edit/friend-edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  friend-edit works!\n</p>\n"

/***/ }),

/***/ "./app/friends/friend-edit/friend-edit.component.ts":
/*!**********************************************************!*\
  !*** ./app/friends/friend-edit/friend-edit.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let FriendEditComponent = class FriendEditComponent {
    constructor() { }
    ngOnInit() {
    }
};
FriendEditComponent = __decorate([
    core_1.Component({
        selector: 'app-friend-edit',
        template: __webpack_require__(/*! ./friend-edit.component.html */ "./app/friends/friend-edit/friend-edit.component.html"),
        styles: [__webpack_require__(/*! ./friend-edit.component.css */ "./app/friends/friend-edit/friend-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FriendEditComponent);
exports.FriendEditComponent = FriendEditComponent;


/***/ }),

/***/ "./app/friends/friend-list/friend-list.component.css":
/*!***********************************************************!*\
  !*** ./app/friends/friend-list/friend-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2ZyaWVuZHMvZnJpZW5kLWxpc3QvZnJpZW5kLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/friends/friend-list/friend-list.component.html":
/*!************************************************************!*\
  !*** ./app/friends/friend-list/friend-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  friend-list works!\n</p>\n"

/***/ }),

/***/ "./app/friends/friend-list/friend-list.component.ts":
/*!**********************************************************!*\
  !*** ./app/friends/friend-list/friend-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let FriendListComponent = class FriendListComponent {
    constructor() { }
    ngOnInit() {
    }
};
FriendListComponent = __decorate([
    core_1.Component({
        selector: 'app-friend-list',
        template: __webpack_require__(/*! ./friend-list.component.html */ "./app/friends/friend-list/friend-list.component.html"),
        styles: [__webpack_require__(/*! ./friend-list.component.css */ "./app/friends/friend-list/friend-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FriendListComponent);
exports.FriendListComponent = FriendListComponent;


/***/ }),

/***/ "./app/friends/friends.module.ts":
/*!***************************************!*\
  !*** ./app/friends/friends.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const friend_list_component_1 = __webpack_require__(/*! ./friend-list/friend-list.component */ "./app/friends/friend-list/friend-list.component.ts");
const friend_create_component_1 = __webpack_require__(/*! ./friend-create/friend-create.component */ "./app/friends/friend-create/friend-create.component.ts");
const friend_edit_component_1 = __webpack_require__(/*! ./friend-edit/friend-edit.component */ "./app/friends/friend-edit/friend-edit.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
let FriendsModule = class FriendsModule {
};
FriendsModule = __decorate([
    core_1.NgModule({
        declarations: [friend_list_component_1.FriendListComponent, friend_create_component_1.FriendCreateComponent, friend_edit_component_1.FriendEditComponent],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ]
    })
], FriendsModule);
exports.FriendsModule = FriendsModule;


/***/ }),

/***/ "./app/groups/add-member/add-member.component.css":
/*!********************************************************!*\
  !*** ./app/groups/add-member/add-member.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2dyb3Vwcy9hZGQtbWVtYmVyL2FkZC1tZW1iZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/groups/add-member/add-member.component.html":
/*!*********************************************************!*\
  !*** ./app/groups/add-member/add-member.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Add Member</title>\n<div class=\"jumbotron center-block\" style=\"width: 50%; text-align: center\" *ngIf=\"isAvailable\">\r\n    <h4> Add Members </h4>\r\n    <h3> {{ currentGroup.GroupName }} </h3>\r\n\r\n    <div class=\"container\">\r\n        <h3 style=\"font-weight: bold;\">Members</h3><br />\r\n\r\n        <div *ngFor=\"let user of currentGroup.GroupUsers\">\r\n            <div class=\"form-group col-xs-6\">\r\n                <input type=\"text\" class=\"form-control\" [value]=\"user.FullName\" style=\"background-color: white\" readonly />\r\n            </div>\r\n            <div class=\"form-group col-xs-6\">\r\n                <input type=\"text\" class=\"form-control\" [value]=\"user.UserName\" style=\"background-color: white\" readonly />\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-xs-6\" style=\"margin-top: 5%;\">\r\n            <input #FullName name=\"newlyAddedFulllName\" [(ngModel)]=\"newlyAddedFulllName\" class=\"form-control\" placeholder=\"Name\" />\r\n        </div>\r\n        <div class=\"form-group col-xs-6\" style=\"margin-top: 5%;\">\r\n            <input #UserName name=\"newlyAddedUserName\" [(ngModel)]=\"newlyAddedUserName\" class=\"form-control\" placeholder=\"Email Address\" />\r\n        </div>\r\n        <button class=\"btn btn-success\" (click)=\"AddMember(FullName.value,UserName.value)\" style=\"margin: 5% 0px 5% 0px;\">Add Member</button>\r\n    </div>\r\n    <button class=\"btn btn-success\" (click)=\"Save()\">Save</button>\r\n</div>\n"

/***/ }),

/***/ "./app/groups/add-member/add-member.component.ts":
/*!*******************************************************!*\
  !*** ./app/groups/add-member/add-member.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ../shared/group.service */ "./app/groups/shared/group.service.ts");
const group_model_1 = __webpack_require__(/*! ../shared/group.model */ "./app/groups/shared/group.model.ts");
let AddMemberComponent = class AddMemberComponent {
    constructor(_route, _groupService, _router) {
        this._route = _route;
        this._groupService = _groupService;
        this._router = _router;
        this.groupID = +this._route.snapshot.paramMap.get('id');
        this.currentGroup = new group_model_1.GroupDetails();
        this.newUsers = [];
        this.isAvailable = false;
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }
    ngOnInit() {
        this._groupService.GetGroupById(this.groupID).subscribe(res => {
            this.currentGroup = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
    }
    AddMember(FullName, UserName) {
        let user = new group_model_1.CreateUserMapper(FullName, UserName);
        this.currentGroup.GroupUsers.push(user);
        this.newUsers.push(user);
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }
    Save() {
        this._groupService.AddUserToGroup(this.newUsers, this.groupID).subscribe(res => {
            this._router.navigate(['/groups/', this.groupID]);
        }, err => {
            debugger;
        });
    }
};
AddMemberComponent = __decorate([
    core_1.Component({
        selector: 'app-add-member',
        template: __webpack_require__(/*! ./add-member.component.html */ "./app/groups/add-member/add-member.component.html"),
        styles: [__webpack_require__(/*! ./add-member.component.css */ "./app/groups/add-member/add-member.component.css")]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, group_service_1.GroupService, router_1.Router])
], AddMemberComponent);
exports.AddMemberComponent = AddMemberComponent;


/***/ }),

/***/ "./app/groups/group-create/group-create.component.css":
/*!************************************************************!*\
  !*** ./app/groups/group-create/group-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    margin-bottom: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC9hcHAvZ3JvdXBzL2dyb3VwLWNyZWF0ZS9ncm91cC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJBcHAvYXBwL2dyb3Vwcy9ncm91cC1jcmVhdGUvZ3JvdXAtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./app/groups/group-create/group-create.component.html":
/*!*************************************************************!*\
  !*** ./app/groups/group-create/group-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 60%; text-align: center;\">\r\n    <form #form=\"ngForm\" autocomplete=\"off\">\r\n        <div class=\"container\" style=\"padding: 15px;\" *ngIf=\"isAvailable\">\r\n            <div class=\"form-group\">\r\n                <label>Your group name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"formData.Name\" placeholder=\"Enter group name\" required />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Category</label>\r\n                <select class=\"form-control\" name=\"Category\" [(ngModel)]=\"formData.Category\" required>\r\n                    <option value=\"0\" selected disabled>--Select--</option>\r\n                    <option *ngFor=\"let category of categoryList\" [value]=\"category.ID\"> {{ category.Name }} </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"container\" style=\"margin: 10% 0px 10% 0px; border-radius: 5px; box-shadow: 5px 5px 8px #777\">\r\n                <h4 style=\"font-weight: bold; margin-bottom: 5%;\">Members</h4>\r\n                <input type=\"text\" name=\"Id\" [(ngModel)]=\"currentUser.Id\" hidden />\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label>Name</label>\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"currentUser.FullName\" style=\"background-color: white\" readonly />\r\n                </div>\r\n                <div class=\"form-group col-xs-6\">\r\n                    <label>Email</label>\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"currentUser.UserName\" style=\"background-color: white\" readonly />\r\n                </div>\r\n\r\n                <div *ngFor=\"let user of formData.UserGroupMapper\">\r\n                    <div class=\"form-group col-xs-6\">\r\n                        <input type=\"text\" class=\"form-control\" [value]=\"user.FullName\" style=\"background-color: white\" readonly />\r\n                    </div>\r\n                    <div class=\"form-group col-xs-6\">\r\n                        <input type=\"text\" class=\"form-control\" [value]=\"user.UserName\" style=\"background-color: white\" readonly />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-xs-6\" style=\"margin-top: 5%;\">\r\n                    <input #FullName name=\"newlyAddedFulllName\" [(ngModel)]=\"newlyAddedFulllName\" class=\"form-control\" placeholder=\"Name\" />\r\n                </div>\r\n                <div class=\"form-group col-xs-6\" style=\"margin-top: 5%;\">\r\n                    <input #UserName name=\"newlyAddedUserName\" [(ngModel)]=\"newlyAddedUserName\" class=\"form-control\" placeholder=\"Email Address\" />\r\n                </div>\r\n\r\n                <button class=\"btn btn-success\" (click)=\"AddUser(FullName.value,UserName.value)\" style=\"margin: 0px 0px 5% 0px;\">Add User</button>\r\n            </div>\r\n        </div>\r\n        <label>Simplify Debts</label>\r\n        <div class=\"form-check\" style=\"margin-bottom: 3%;\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"simplifydebt\" name=\"SimplifyDebts\" [(ngModel)]=\"formData.SimplifyDebts\">\r\n            <label class=\"form-check-label\" for=\"simplifydebt\">\r\n                &nbsp; True\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control rounded-0\" name=\"Note\" [(ngModel)]=\"formData.Note\" rows=\"3\" cols=\"15\" placeholder=\"Notes\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"OnSubmit()\" [disabled]=\"form.invalid\">Save</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./app/groups/group-create/group-create.component.ts":
/*!***********************************************************!*\
  !*** ./app/groups/group-create/group-create.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const group_service_1 = __webpack_require__(/*! ../shared/group.service */ "./app/groups/shared/group.service.ts");
const user_service_1 = __webpack_require__(/*! ../../users/shared/user.service */ "./app/users/shared/user.service.ts");
const group_model_1 = __webpack_require__(/*! ../shared/group.model */ "./app/groups/shared/group.model.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const user_model_1 = __webpack_require__(/*! ../../users/shared/user.model */ "./app/users/shared/user.model.ts");
let GroupCreateComponent = class GroupCreateComponent {
    constructor(_userService, _groupService, _router) {
        this._userService = _userService;
        this._groupService = _groupService;
        this._router = _router;
        this.currentUser = new user_model_1.UserDetails();
        this.formData = new group_model_1.CreateGroupModel();
        this.categoryList = [];
        this.isAvailable = false;
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }
    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(res => {
            this.currentUser = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
        this._groupService.GetCategories().subscribe(res => {
            this.categoryList = res;
        }, err => {
            debugger;
        });
    }
    AddUser(FullName, UserName) {
        let user = new group_model_1.CreateUserMapper(FullName, UserName);
        this.formData.UserGroupMapper.push(user);
        this.newlyAddedFulllName = '';
        this.newlyAddedUserName = '';
    }
    OnSubmit() {
        this._groupService.CreateGroup(this.formData).subscribe(res => {
            this._router.navigate(['/groups']);
        }, err => {
            console.log(err);
        });
    }
};
GroupCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-group-create',
        template: __webpack_require__(/*! ./group-create.component.html */ "./app/groups/group-create/group-create.component.html"),
        styles: [__webpack_require__(/*! ./group-create.component.css */ "./app/groups/group-create/group-create.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, group_service_1.GroupService, router_1.Router])
], GroupCreateComponent);
exports.GroupCreateComponent = GroupCreateComponent;


/***/ }),

/***/ "./app/groups/group-details/group-details.component.css":
/*!**************************************************************!*\
  !*** ./app/groups/group-details/group-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWxzL2dyb3VwLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/groups/group-details/group-details.component.html":
/*!***************************************************************!*\
  !*** ./app/groups/group-details/group-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"text-align: center; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\" *ngIf=\"isAvailable\">\r\n    <h2> {{ groupDetails.GroupName }} </h2>\r\n    <h4> Created on : {{ groupDetails.DateCreated | date: 'medium' }} </h4>\r\n    <h4> Created by : {{ groupDetails.CreatedBy }} </h4>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\" style=\"box-shadow: 10px 10px 20px #777; border-radius: 5px; margin: 5% 2% 0px 2%\">\r\n                <div id=\"leftcontainer\">\r\n                    <div class=\"container\" style=\"margin-top: 5%; font-family: 'Times New Roman', Times, serif\">\r\n                        <h3 style=\"font-weight: bold; margin-bottom: 2%;\">Users</h3>\r\n                        <table class=\"table table-striped table-bordered\" style=\"margin-top: 5%;\">\r\n                            <thead>\r\n                                <tr style=\"font-weight: bold;\">\r\n                                    <td>Name</td>\r\n                                    <td>Email Address</td>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let group of groupDetails.GroupUsers\" style=\"word-break: break-all\">\r\n                                    <td> {{ group.FullName }} </td>\r\n                                    <td> {{ group.UserName }} </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['/groups',groupID,'add-member']\" style=\"margin-bottom: 10%;\">Add Member</a>\r\n            </div>\r\n            <div class=\"col-sm-6\" style=\"box-shadow: 10px 10px 20px #777; border-radius: 5px; margin: 5% 2% 0px 2%\">\r\n                <div id=\"middlecontainer\">\r\n                    <div class=\"container\" style=\"margin-top: 5%; font-family: 'Times New Roman', Times, serif\">\r\n                        <h3 style=\"font-weight: bold; margin-bottom: 2%;\">Expenses</h3>\r\n                        <table class=\"table table-bordered table-striped\" style=\"margin-top: 5%;\">\r\n                            <tbody>\r\n                                <tr *ngFor=\"let expense of expenses; let i = index\">\r\n                                    <td [routerLink]=\"['/groups/', groupID, 'expenses', expense.ID, 'edit-expense']\" style=\"cursor: pointer;\">{{i+1}}.  {{expense.Payer}} owes {{expense.Amount}} to {{expense.Payee}} for <b>{{expense.ExpenseName}}</b></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <a class=\"btn btn-primary\" [routerLink]=\"['/groups/',groupID,'expenses']\" style=\"margin-bottom: 10%;\">All expenses</a><br />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a class=\"btn btn-success btn-lg\" [routerLink]=\"['/groups/',groupID,'create-expense']\" style=\"margin-top: 5%;\">Create new expense</a><br />\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/groups']\" style=\"margin-top: 1%;\">Back</a>\r\n</div>\r\n"

/***/ }),

/***/ "./app/groups/group-details/group-details.component.ts":
/*!*************************************************************!*\
  !*** ./app/groups/group-details/group-details.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ../shared/group.service */ "./app/groups/shared/group.service.ts");
const expenses_service_1 = __webpack_require__(/*! ../../expenses/shared/expenses.service */ "./app/expenses/shared/expenses.service.ts");
const group_model_1 = __webpack_require__(/*! ../shared/group.model */ "./app/groups/shared/group.model.ts");
let GroupDetailsComponent = class GroupDetailsComponent {
    constructor(_route, _groupService, _expenseService) {
        this._route = _route;
        this._groupService = _groupService;
        this._expenseService = _expenseService;
        this.groupID = +this._route.snapshot.paramMap.get('id');
        this.groupDetails = new group_model_1.GroupDetails();
        this.expenses = [];
        this.isAvailable = false;
    }
    ngOnInit() {
        this._groupService.GetGroupById(this.groupID).subscribe(res => {
            this.groupDetails = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
        this._expenseService.GetAllExpenses(this.groupID).subscribe(res => {
            this.expenses = res;
        }, err => {
            debugger;
        });
    }
};
GroupDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-group-details',
        template: __webpack_require__(/*! ./group-details.component.html */ "./app/groups/group-details/group-details.component.html"),
        styles: [__webpack_require__(/*! ./group-details.component.css */ "./app/groups/group-details/group-details.component.css")]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, group_service_1.GroupService, expenses_service_1.ExpenseService])
], GroupDetailsComponent);
exports.GroupDetailsComponent = GroupDetailsComponent;


/***/ }),

/***/ "./app/groups/group-edit/group-edit.component.css":
/*!********************************************************!*\
  !*** ./app/groups/group-edit/group-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2dyb3Vwcy9ncm91cC1lZGl0L2dyb3VwLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/groups/group-edit/group-edit.component.html":
/*!*********************************************************!*\
  !*** ./app/groups/group-edit/group-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 60%; text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\" *ngIf=\"isAvailable\">\n    <h3> {{ groupDetails.GroupName }} ( {{ groupDetails.DateCreated | date: 'medium' }} ) </h3>\n\n    <form autocomplete=\"off\">\r\n        <div class=\"container\" style=\"padding: 15px;\">\r\n            <div class=\"form-group\">\r\n                <label>Your group name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"GroupName\" [(ngModel)]=\"groupDetails.GroupName\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Category</label>\r\n                <select class=\"form-control\" name=\"Category\" [(ngModel)]=\"groupDetails.Category\">\r\n                    <option *ngFor=\"let category of categoryList; let i = index\" [value]=\"category.ID\" [selected]=\"i == 'groupDetails.Category'\"> {{ category.Name }} </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"container\" style=\"margin: 10% 0px 10% 0px; border-radius: 5px; box-shadow: 5px 5px 8px #777; word-break: break-all;\">\r\n                <h4 style=\"font-weight: bold; margin-bottom: 5%;\">Members</h4>\r\n                <div class=\"container\" *ngFor=\"let user of groupDetails.GroupUsers; let i = index\">\r\n                    <div class=\"form-group col-xs-5\">\r\n                        {{ i+1 }}.{{ user.FullName }}\r\n                    </div>\r\n                    <div class=\"form-group col-xs-4\">\r\n                        {{ user.UserName }}\r\n                    </div>\r\n                    <div class=\"form-group col-xs-3\">\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"RemoveUserFromGroup(user.Id)\">Remove</button>\r\n                    </div>\r\n                </div>\r\n                <a class=\"btn btn-primary\" [routerLink]=\"['/groups',groupID,'add-member']\" style=\"margin-bottom: 10%;\">Add Member</a>\r\n            </div>\r\n        </div>\r\n        <label>Simplify Debts</label>\r\n        <div class=\"form-check\" style=\"margin-bottom: 3%;\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"simplifydebt\" name=\"SimplifyDebts\" [(ngModel)]=\"groupDetails.SimplifyDebts\" >\r\n            <label class=\"form-check-label\" for=\"simplifydebt\">\r\n                &nbsp; True\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control rounded-0\" name=\"Note\" [(ngModel)]=\"groupDetails.Note\" rows=\"3\" cols=\"15\" placeholder=\"Notes\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"OnSubmit(groupDetails)\">Save</button>\r\n        </div>\r\n    </form>\n</div>\n"

/***/ }),

/***/ "./app/groups/group-edit/group-edit.component.ts":
/*!*******************************************************!*\
  !*** ./app/groups/group-edit/group-edit.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ../shared/group.service */ "./app/groups/shared/group.service.ts");
const group_model_1 = __webpack_require__(/*! ../shared/group.model */ "./app/groups/shared/group.model.ts");
let GroupEditComponent = class GroupEditComponent {
    constructor(_groupService, _route, _router) {
        this._groupService = _groupService;
        this._route = _route;
        this._router = _router;
        this.groupID = +this._route.snapshot.paramMap.get('id');
        this.groupDetails = new group_model_1.GroupDetails();
        this.categoryList = [];
        this.isAvailable = false;
    }
    ngOnInit() {
        this._groupService.GetGroupById(this.groupID).subscribe((res) => {
            this.groupDetails = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
        this._groupService.GetCategories().subscribe(res => {
            this.categoryList = res;
        }, err => {
            debugger;
        });
    }
    RemoveUserFromGroup(userID) {
        var index = this.groupDetails.GroupUsers.findIndex(x => x.Id == userID);
        this.groupDetails.GroupUsers.splice(index, 1);
    }
    OnSubmit(groupDetails) {
        this._groupService.EditGroup(groupDetails).subscribe(res => {
            this._router.navigate(['/groups']);
        }, err => {
            console.log(err);
        });
    }
};
GroupEditComponent = __decorate([
    core_1.Component({
        selector: 'app-group-edit',
        template: __webpack_require__(/*! ./group-edit.component.html */ "./app/groups/group-edit/group-edit.component.html"),
        styles: [__webpack_require__(/*! ./group-edit.component.css */ "./app/groups/group-edit/group-edit.component.css")]
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService, router_1.ActivatedRoute, router_1.Router])
], GroupEditComponent);
exports.GroupEditComponent = GroupEditComponent;


/***/ }),

/***/ "./app/groups/group-list/group-list.component.css":
/*!********************************************************!*\
  !*** ./app/groups/group-list/group-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2dyb3Vwcy9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/groups/group-list/group-list.component.html":
/*!*********************************************************!*\
  !*** ./app/groups/group-list/group-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"text-align: center; background-color: whitesmoke\">\n    <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/create-group']\">Create New Group</a>\n\n    <div class=\"container\" style=\"margin-top: 3%; padding: 15px; box-shadow: 10px 10px 20px #777; border-radius: 10px; background-color: ghostwhite\">\r\n        <table class=\"table table-hover\" style=\"font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\">\r\n            <thead style=\"font-weight: bold\">\r\n                <tr>\r\n                    <td>Group</td>\r\n                    <td>Created By</td>\r\n                    <td>Date Created</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let group of groupList\">\r\n                <tr>\r\n                    <td><a [routerLink]=\"['/groups',group.GroupID]\" style=\"text-decoration: none; display: block; color: black; cursor: pointer\">{{ group.GroupName }}</a></td>\r\n                    <td><a [routerLink]=\"['/groups',group.GroupID]\" style=\"text-decoration: none; display: block; color: black; cursor: pointer\">{{ group.CreatedBy }}</a></td>\r\n                    <td><a [routerLink]=\"['/groups',group.GroupID]\" style=\"text-decoration: none; display: block; color: black; cursor: pointer\">{{ group.DateCreated | date: 'dd/MM/yyyy' }}</a></td>\r\n                    <td *ngIf=\"currentUser.FullName === group.CreatedBy\"><a class=\"btn btn-success\" [routerLink]=\"['/groups/',group.GroupID,'edit-group']\">Edit</a></td>\r\n                    <td *ngIf=\"currentUser.FullName === group.CreatedBy\"><button class=\"btn btn-danger\" (click)=\"DeleteGroup(group.GroupID)\">Delete</button></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\n</div>\n"

/***/ }),

/***/ "./app/groups/group-list/group-list.component.ts":
/*!*******************************************************!*\
  !*** ./app/groups/group-list/group-list.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const group_service_1 = __webpack_require__(/*! ../shared/group.service */ "./app/groups/shared/group.service.ts");
const user_service_1 = __webpack_require__(/*! ../../users/shared/user.service */ "./app/users/shared/user.service.ts");
const user_model_1 = __webpack_require__(/*! ../../users/shared/user.model */ "./app/users/shared/user.model.ts");
let GroupListComponent = class GroupListComponent {
    constructor(_groupService, _userService) {
        this._groupService = _groupService;
        this._userService = _userService;
        this.groupList = [];
        this.currentUser = new user_model_1.UserDetails();
    }
    ngOnInit() {
        this._groupService.GetAllGroups().subscribe(res => {
            this.groupList = res;
        }, err => {
            debugger;
        });
        this._userService.GetCurrentUser().subscribe(res => {
            this.currentUser = res;
        }, err => {
            debugger;
        });
    }
    DeleteGroup(groupID) {
        this._groupService.DeleteGroup(groupID).subscribe(res => {
            window.location.reload();
        }, err => {
            debugger;
        });
    }
};
GroupListComponent = __decorate([
    core_1.Component({
        selector: 'app-group-list',
        template: __webpack_require__(/*! ./group-list.component.html */ "./app/groups/group-list/group-list.component.html"),
        styles: [__webpack_require__(/*! ./group-list.component.css */ "./app/groups/group-list/group-list.component.css")]
    }),
    __metadata("design:paramtypes", [group_service_1.GroupService, user_service_1.UserService])
], GroupListComponent);
exports.GroupListComponent = GroupListComponent;


/***/ }),

/***/ "./app/groups/groups.module.ts":
/*!*************************************!*\
  !*** ./app/groups/groups.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const group_list_component_1 = __webpack_require__(/*! ./group-list/group-list.component */ "./app/groups/group-list/group-list.component.ts");
const group_details_component_1 = __webpack_require__(/*! ./group-details/group-details.component */ "./app/groups/group-details/group-details.component.ts");
const group_create_component_1 = __webpack_require__(/*! ./group-create/group-create.component */ "./app/groups/group-create/group-create.component.ts");
const group_edit_component_1 = __webpack_require__(/*! ./group-edit/group-edit.component */ "./app/groups/group-edit/group-edit.component.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const group_service_1 = __webpack_require__(/*! ./shared/group.service */ "./app/groups/shared/group.service.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const add_member_component_1 = __webpack_require__(/*! ./add-member/add-member.component */ "./app/groups/add-member/add-member.component.ts");
let GroupsModule = class GroupsModule {
};
GroupsModule = __decorate([
    core_1.NgModule({
        declarations: [
            group_list_component_1.GroupListComponent,
            group_details_component_1.GroupDetailsComponent,
            group_create_component_1.GroupCreateComponent,
            group_edit_component_1.GroupEditComponent,
            add_member_component_1.AddMemberComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule
        ],
        providers: [group_service_1.GroupService]
    })
], GroupsModule);
exports.GroupsModule = GroupsModule;


/***/ }),

/***/ "./app/groups/shared/group.model.ts":
/*!******************************************!*\
  !*** ./app/groups/shared/group.model.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CreateGroupModel {
    constructor() {
        this.ID = 0;
        this.Name = '';
        this.Category = 0;
        this.Note = '';
        this.SimplifyDebts = false;
        this.UserGroupMapper = [];
    }
}
exports.CreateGroupModel = CreateGroupModel;
class CreateUserMapper {
    constructor(FullName, UserName) {
        this.FullName = FullName;
        this.UserName = UserName;
    }
}
exports.CreateUserMapper = CreateUserMapper;
class GroupDetails {
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
exports.GroupDetails = GroupDetails;
class GroupUser {
}
exports.GroupUser = GroupUser;
class Category {
    constructor() {
        this.ID = 0;
        this.Name = '';
    }
}
exports.Category = Category;


/***/ }),

/***/ "./app/groups/shared/group.service.ts":
/*!********************************************!*\
  !*** ./app/groups/shared/group.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
let GroupService = class GroupService {
    constructor(_http) {
        this._http = _http;
        this.URL = 'http://localhost:64169/api/Group';
    }
    GetCategories() {
        return this._http.get(this.URL + "/category");
    }
    GetAllGroups() {
        return this._http.get(this.URL + "/groups");
    }
    GetGroupById(groupId) {
        return this._http.get(this.URL + "/groups/" + groupId);
    }
    CreateGroup(groupData) {
        return this._http.post(this.URL + "/groups", groupData);
    }
    EditGroup(groupData) {
        return this._http.put(this.URL + "/groups", groupData);
    }
    AddUserToGroup(userData, groupId) {
        return this._http.post(this.URL + "/groups/" + groupId, userData);
    }
    DeleteGroup(groupID) {
        return this._http.delete(this.URL + "/groups/" + groupID);
    }
};
GroupService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], GroupService);
exports.GroupService = GroupService;


/***/ }),

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./app/app.module.ts");
const environment_1 = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ "./app/users/activity-list/activity-list.component.css":
/*!*************************************************************!*\
  !*** ./app/users/activity-list/activity-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3VzZXJzL2FjdGl2aXR5LWxpc3QvYWN0aXZpdHktbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/users/activity-list/activity-list.component.html":
/*!**************************************************************!*\
  !*** ./app/users/activity-list/activity-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"text-align: center;\">\n    <div class=\"container\">\n        <h3>Activities</h3>\n        <table class=\"table-striped\" style=\"width: 100%; margin: 5% 0px 3% 0px;\">\r\n            <thead>\r\n                <tr style=\"font-weight: bold; font-size: larger\">\r\n                    <td>Activity</td>\r\n                    <td>Date</td>\r\n                    <td></td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let activity of activityList; let i = index\">\r\n                    <td>{{i+1}}. {{activity.Description}}</td>\r\n                    <td>{{activity.Date | date:'medium'}}</td>\r\n                    <td><a class=\"alert-danger\" style=\"cursor: pointer\" (click)=\"RemoveActivity(activity.ID)\">Remove</a></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/dashboard']\">Back</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./app/users/activity-list/activity-list.component.ts":
/*!************************************************************!*\
  !*** ./app/users/activity-list/activity-list.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const user_service_1 = __webpack_require__(/*! ../shared/user.service */ "./app/users/shared/user.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let ActivityListComponent = class ActivityListComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.activityList = [];
    }
    ngOnInit() {
        this._userService.GetAllActivities().subscribe(res => {
            this.activityList = res;
        }, err => {
            debugger;
        });
    }
    RemoveActivity(activityId) {
        this._userService.RemoveActivity(activityId).subscribe(res => {
            location.reload();
        }, err => {
            debugger;
        });
    }
};
ActivityListComponent = __decorate([
    core_1.Component({
        selector: 'app-activity-list',
        template: __webpack_require__(/*! ./activity-list.component.html */ "./app/users/activity-list/activity-list.component.html"),
        styles: [__webpack_require__(/*! ./activity-list.component.css */ "./app/users/activity-list/activity-list.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], ActivityListComponent);
exports.ActivityListComponent = ActivityListComponent;


/***/ }),

/***/ "./app/users/current-user-edit/current-user-edit.component.css":
/*!*********************************************************************!*\
  !*** ./app/users/current-user-edit/current-user-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3VzZXJzL2N1cnJlbnQtdXNlci1lZGl0L2N1cnJlbnQtdXNlci1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/users/current-user-edit/current-user-edit.component.html":
/*!**********************************************************************!*\
  !*** ./app/users/current-user-edit/current-user-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  current-user-edit works!\n</p>\n"

/***/ }),

/***/ "./app/users/current-user-edit/current-user-edit.component.ts":
/*!********************************************************************!*\
  !*** ./app/users/current-user-edit/current-user-edit.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let CurrentUserEditComponent = class CurrentUserEditComponent {
    constructor() { }
    ngOnInit() {
    }
};
CurrentUserEditComponent = __decorate([
    core_1.Component({
        selector: 'app-current-user-edit',
        template: __webpack_require__(/*! ./current-user-edit.component.html */ "./app/users/current-user-edit/current-user-edit.component.html"),
        styles: [__webpack_require__(/*! ./current-user-edit.component.css */ "./app/users/current-user-edit/current-user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CurrentUserEditComponent);
exports.CurrentUserEditComponent = CurrentUserEditComponent;


/***/ }),

/***/ "./app/users/current-user/current-user.component.css":
/*!***********************************************************!*\
  !*** ./app/users/current-user/current-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3VzZXJzL2N1cnJlbnQtdXNlci9jdXJyZW50LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/users/current-user/current-user.component.html":
/*!************************************************************!*\
  !*** ./app/users/current-user/current-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"width: 50%; text-align: center; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\">\r\n    <h3>Your Account</h3>\r\n\r\n    <div class=\"container\" style=\"margin-top: 7%;\" *ngIf=\"isAvailable\">\r\n        <input name=\"Id\" [(ngModel)]=\"currentUserDetails.Id\" hidden />\r\n        <div class=\"form-group\">\r\n            <label>Your Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"FullName\" [(ngModel)]=\"currentUserDetails.FullName\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Email Address</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"FullName\" [(ngModel)]=\"currentUserDetails.UserName\" />\r\n        </div>\r\n\r\n        <div class=\"container\">\r\n            <h4>Groups</h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6\" style=\"padding: 15px;\">\r\n                    <h5>Created Groups</h5>\r\n\r\n                    <table class=\"table table-striped table-responsive\">\r\n                        <tbody>\r\n                            <tr *ngFor=\"let groups of groupDetails; let i = index;\">\r\n                                <td *ngIf=\"groups.CreatedBy === currentUserDetails.FullName\">\r\n                                    <a [routerLink]=\"['/groups', groups.GroupID]\" style=\"text-decoration: none; cursor: pointer;\">{{i+1}}. {{groups.GroupName}}</a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6\" style=\"padding: 15px;\">\r\n                    <h5>Member</h5>\r\n                    <table class=\"table table-striped\">\r\n                        <tbody>\r\n                            <tr *ngFor=\"let groups of groupDetails; let i = index;\">\r\n                                <td>\r\n                                    <a [routerLink]=\"['/groups', groups.GroupID]\" style=\"text-decoration: none; cursor: pointer;\">{{i+1}}. {{groups.GroupName}}</a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/users/current-user/current-user.component.ts":
/*!**********************************************************!*\
  !*** ./app/users/current-user/current-user.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const user_service_1 = __webpack_require__(/*! ../shared/user.service */ "./app/users/shared/user.service.ts");
const group_service_1 = __webpack_require__(/*! ../../groups/shared/group.service */ "./app/groups/shared/group.service.ts");
let CurrentUserComponent = class CurrentUserComponent {
    constructor(_userService, _groupService) {
        this._userService = _userService;
        this._groupService = _groupService;
        this.isAvailable = false;
    }
    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(res => {
            this.currentUserDetails = res;
            this.isAvailable = true;
        }, err => {
            debugger;
        });
        this._groupService.GetAllGroups().subscribe(res => {
            this.groupDetails = res;
        }, err => {
            debugger;
        });
    }
};
CurrentUserComponent = __decorate([
    core_1.Component({
        selector: 'app-current-user',
        template: __webpack_require__(/*! ./current-user.component.html */ "./app/users/current-user/current-user.component.html"),
        styles: [__webpack_require__(/*! ./current-user.component.css */ "./app/users/current-user/current-user.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, group_service_1.GroupService])
], CurrentUserComponent);
exports.CurrentUserComponent = CurrentUserComponent;


/***/ }),

/***/ "./app/users/dashboard/dashboard.component.css":
/*!*****************************************************!*\
  !*** ./app/users/dashboard/dashboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC9hcHAvdXNlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJmaWxlIjoiQXBwL2FwcC91c2Vycy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/users/dashboard/dashboard.component.html":
/*!******************************************************!*\
  !*** ./app/users/dashboard/dashboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron center-block\" style=\"text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n    <div class=\"container\" *ngIf=\"currentUserDataAvailable\">\r\n        <h3>Welcome {{ currentUserData.FullName }} </h3>\r\n        <div class=\"row\" style=\"margin-top: 5%;\">\r\n            <div class=\"col-sm-4 col-md-3 col-lg-3\" style=\"box-shadow: 10px 10px 20px #777; border-radius: 15px; padding: 15px;\">\r\n                <h3>Friends</h3>\r\n                <table class=\"table-striped\" style=\"width: 100%; margin: 10% 0px 10% 0px;\">\r\n                    <thead>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td></td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let friend of friendList\" style=\"font-size: larger\">\r\n                            <td>{{friend.FullName}}</td>\r\n                            <td><i class=\"fa fa-times alert-danger\" aria-hidden=\"true\" style=\"cursor: pointer;\"\r\n                                   (click)=\"removeFriend(friend.Id)\" ></i></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <a class=\"btn btn-success\" [routerLink]=\"['/user/', currentUserData.Id, 'add-friend']\">Add Friend</a>\r\n            </div>\r\n            <div class=\"col-sm-4 col-md-6 col-lg-6\" style=\"box-shadow: 10px 10px 20px #777; border-radius: 20px;\">\r\n                <h3>Activities</h3>\r\n\r\n                <table class=\"table-striped\" style=\"width: 100%; margin: 8% 0px 3% 0px;\">\r\n                    <thead>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td></td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let activity of activityList | slice:0:4; let i = index\" style=\"font-size: larger\">\r\n                            <td>{{i+1}}. {{activity.Description}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <a class=\"btn btn-success\" [routerLink]=\"['/current-user/activities']\" style=\"margin-bottom: 3%;\">All activities</a>\r\n            </div>\r\n            <div class=\"col-sm-4 col-md-3 col-lg-3\" style=\"box-shadow: 10px 10px 20px #777; border-radius: 15px; padding: 15px;\">\r\n                <h3>Balance</h3>\r\n                <table class=\"table-striped\" style=\"width: 100%; margin: 10% 0px 10% 0px;\">\r\n                    <tbody style=\"font-size: large\">\r\n                        <tr>\r\n                            <td>1. You are owed total <b>{{totalAmountLent}}</b> Rs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>2. You owe total <b>{{totalAmountBorrowed}}</b> Rs.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\n</div>\n"

/***/ }),

/***/ "./app/users/dashboard/dashboard.component.ts":
/*!****************************************************!*\
  !*** ./app/users/dashboard/dashboard.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const user_service_1 = __webpack_require__(/*! ../shared/user.service */ "./app/users/shared/user.service.ts");
const user_model_1 = __webpack_require__(/*! ../shared/user.model */ "./app/users/shared/user.model.ts");
let DashboardComponent = class DashboardComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.currentUserData = new user_model_1.UserDetails();
        this.currentUserDataAvailable = false;
        this.friendList = [];
        this.activityList = [];
    }
    ngOnInit() {
        this._userService.GetCurrentUser().subscribe(res => {
            this.currentUserData = res;
            this.currentUserDataAvailable = true;
            this._userService.GetAllFriends(this.currentUserData.Id).subscribe(res => {
                this.friendList = res;
            }, err => {
                debugger;
            });
            this._userService.GetTotalBorrowed(this.currentUserData.Id).subscribe(res => {
                this.totalAmountBorrowed = res;
            }, err => {
                debugger;
            });
            this._userService.GetTotalLent(this.currentUserData.Id).subscribe(res => {
                this.totalAmountLent = res;
            }, err => {
                debugger;
            });
        }, err => {
            debugger;
        });
        this._userService.GetAllActivities().subscribe(res => {
            this.activityList = res;
        }, err => {
            debugger;
        });
    }
    removeFriend(friendId) {
        this._userService.DeleteFriend(this.currentUserData.Id, friendId).subscribe(res => {
            location.reload();
        }, err => {
            debugger;
        });
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! ./dashboard.component.html */ "./app/users/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./app/users/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./app/users/shared/user.model.ts":
/*!****************************************!*\
  !*** ./app/users/shared/user.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UserDetails {
    constructor() {
        this.Id = '';
        this.FullName = '';
        this.UserName = '';
    }
}
exports.UserDetails = UserDetails;
class UserGroup {
}
exports.UserGroup = UserGroup;
class Activity {
    constructor() {
        this.ID = 0;
        this.Date = null;
        this.Description = '';
    }
}
exports.Activity = Activity;


/***/ }),

/***/ "./app/users/shared/user.service.ts":
/*!******************************************!*\
  !*** ./app/users/shared/user.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.URL = 'http://localhost:64169/api/User';
    }
    GetCurrentUser() {
        return this._http.get(this.URL + "/current-user");
    }
    GetUserById(userId) {
        return this._http.get(this.URL + "/users/" + userId);
    }
    GetAllFriends(userId) {
        return this._http.get(this.URL + "/users/" + userId + "/friends");
    }
    AddFriend(userId, userData) {
        return this._http.post(this.URL + "/users/" + userId + "/friends", userData);
    }
    GetTotalLent(userId) {
        return this._http.get(this.URL + "/users/" + userId + "/total-lent");
    }
    GetTotalBorrowed(userId) {
        return this._http.get(this.URL + "/users/" + userId + "/total-borrowed");
    }
    DeleteFriend(userId, friendId) {
        return this._http.delete(this.URL + "/users/" + userId + "/friends/" + friendId);
    }
    GetAllActivities() {
        return this._http.get(this.URL + "/current-user/activities");
    }
    RemoveActivity(activityId) {
        return this._http.delete(this.URL + "/current-user/activities/" + activityId);
    }
};
UserService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./app/users/users.module.ts":
/*!***********************************!*\
  !*** ./app/users/users.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const current_user_component_1 = __webpack_require__(/*! ./current-user/current-user.component */ "./app/users/current-user/current-user.component.ts");
const current_user_edit_component_1 = __webpack_require__(/*! ./current-user-edit/current-user-edit.component */ "./app/users/current-user-edit/current-user-edit.component.ts");
const user_service_1 = __webpack_require__(/*! ./shared/user.service */ "./app/users/shared/user.service.ts");
const dashboard_component_1 = __webpack_require__(/*! ./dashboard/dashboard.component */ "./app/users/dashboard/dashboard.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const activity_list_component_1 = __webpack_require__(/*! ./activity-list/activity-list.component */ "./app/users/activity-list/activity-list.component.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    core_1.NgModule({
        declarations: [current_user_component_1.CurrentUserComponent, current_user_edit_component_1.CurrentUserEditComponent, dashboard_component_1.DashboardComponent, activity_list_component_1.ActivityListComponent],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            router_1.RouterModule
        ],
        providers: [user_service_1.UserService]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\subhradeep\Desktop\Asp.net Core Test\Splitwise\Splitwise\Splitwise.Web\App\app\main.ts */"./app/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map