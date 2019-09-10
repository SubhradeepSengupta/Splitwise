using Microsoft.EntityFrameworkCore.Migrations;

namespace Splitwise.DomainModel.Migrations
{
    public partial class UserExpenseMapperChangedandExpensePayeeMapperAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserExpenseMappers_AspNetUsers_FromUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropForeignKey(
                name: "FK_UserExpenseMappers_AspNetUsers_ToUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropIndex(
                name: "IX_UserExpenseMappers_FromUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropIndex(
                name: "IX_UserExpenseMappers_ToUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "UserExpenseMappers");

            migrationBuilder.DropColumn(
                name: "FromUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropColumn(
                name: "ToUser",
                table: "UserExpenseMappers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Amount",
                table: "UserExpenseMappers",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "FromUser",
                table: "UserExpenseMappers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ToUser",
                table: "UserExpenseMappers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserExpenseMappers_FromUser",
                table: "UserExpenseMappers",
                column: "FromUser");

            migrationBuilder.CreateIndex(
                name: "IX_UserExpenseMappers_ToUser",
                table: "UserExpenseMappers",
                column: "ToUser");

            migrationBuilder.AddForeignKey(
                name: "FK_UserExpenseMappers_AspNetUsers_FromUser",
                table: "UserExpenseMappers",
                column: "FromUser",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserExpenseMappers_AspNetUsers_ToUser",
                table: "UserExpenseMappers",
                column: "ToUser",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
