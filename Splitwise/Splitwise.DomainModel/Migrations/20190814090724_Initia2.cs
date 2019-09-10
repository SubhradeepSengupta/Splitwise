using Microsoft.EntityFrameworkCore.Migrations;

namespace Splitwise.DomainModel.Migrations
{
    public partial class Initia2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activities_Groups_GroupID",
                table: "Activities");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Currencies_CurrencyID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Languages_LanguageID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Friends_Groups_GroupID",
                table: "Friends");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupExpenseMappers_Currencies_CurrencyID",
                table: "GroupExpenseMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupExpenseMappers_Groups_GroupID",
                table: "GroupExpenseMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Categories_Category",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Settlements_GroupExpenseMappers_ExpenseID",
                table: "Settlements");

            migrationBuilder.DropForeignKey(
                name: "FK_UserGroupMappers_Groups_GroupID",
                table: "UserGroupMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_UserNotificationMappers_Notifications_NotificationID",
                table: "UserNotificationMappers");

            migrationBuilder.AlterColumn<int>(
                name: "NotificationID",
                table: "UserNotificationMappers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "UserGroupMappers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "ExpenseID",
                table: "Settlements",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "Category",
                table: "Groups",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "GroupExpenseMappers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CurrencyID",
                table: "GroupExpenseMappers",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "Friends",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "Activities",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_Groups_GroupID",
                table: "Activities",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Currencies_CurrencyID",
                table: "AspNetUsers",
                column: "CurrencyID",
                principalTable: "Currencies",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Languages_LanguageID",
                table: "AspNetUsers",
                column: "LanguageID",
                principalTable: "Languages",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Friends_Groups_GroupID",
                table: "Friends",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupExpenseMappers_Currencies_CurrencyID",
                table: "GroupExpenseMappers",
                column: "CurrencyID",
                principalTable: "Currencies",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupExpenseMappers_Groups_GroupID",
                table: "GroupExpenseMappers",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Categories_Category",
                table: "Groups",
                column: "Category",
                principalTable: "Categories",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Settlements_GroupExpenseMappers_ExpenseID",
                table: "Settlements",
                column: "ExpenseID",
                principalTable: "GroupExpenseMappers",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserGroupMappers_Groups_GroupID",
                table: "UserGroupMappers",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserNotificationMappers_Notifications_NotificationID",
                table: "UserNotificationMappers",
                column: "NotificationID",
                principalTable: "Notifications",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Activities_Groups_GroupID",
                table: "Activities");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Currencies_CurrencyID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Languages_LanguageID",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Friends_Groups_GroupID",
                table: "Friends");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupExpenseMappers_Currencies_CurrencyID",
                table: "GroupExpenseMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupExpenseMappers_Groups_GroupID",
                table: "GroupExpenseMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Categories_Category",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Settlements_GroupExpenseMappers_ExpenseID",
                table: "Settlements");

            migrationBuilder.DropForeignKey(
                name: "FK_UserGroupMappers_Groups_GroupID",
                table: "UserGroupMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_UserNotificationMappers_Notifications_NotificationID",
                table: "UserNotificationMappers");

            migrationBuilder.AlterColumn<int>(
                name: "NotificationID",
                table: "UserNotificationMappers",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "UserGroupMappers",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ExpenseID",
                table: "Settlements",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Category",
                table: "Groups",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "GroupExpenseMappers",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CurrencyID",
                table: "GroupExpenseMappers",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "Friends",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupID",
                table: "Activities",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Activities_Groups_GroupID",
                table: "Activities",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Currencies_CurrencyID",
                table: "AspNetUsers",
                column: "CurrencyID",
                principalTable: "Currencies",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Languages_LanguageID",
                table: "AspNetUsers",
                column: "LanguageID",
                principalTable: "Languages",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Friends_Groups_GroupID",
                table: "Friends",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupExpenseMappers_Currencies_CurrencyID",
                table: "GroupExpenseMappers",
                column: "CurrencyID",
                principalTable: "Currencies",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupExpenseMappers_Groups_GroupID",
                table: "GroupExpenseMappers",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Categories_Category",
                table: "Groups",
                column: "Category",
                principalTable: "Categories",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Settlements_GroupExpenseMappers_ExpenseID",
                table: "Settlements",
                column: "ExpenseID",
                principalTable: "GroupExpenseMappers",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserGroupMappers_Groups_GroupID",
                table: "UserGroupMappers",
                column: "GroupID",
                principalTable: "Groups",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserNotificationMappers_Notifications_NotificationID",
                table: "UserNotificationMappers",
                column: "NotificationID",
                principalTable: "Notifications",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
