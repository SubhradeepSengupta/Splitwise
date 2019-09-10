using Microsoft.EntityFrameworkCore.Migrations;

namespace Splitwise.DomainModel.Migrations
{
    public partial class UserExpenseMapperupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateIndex(
                name: "IX_UserExpenseMappers_FromUser",
                table: "UserExpenseMappers",
                column: "FromUser");

            migrationBuilder.AddForeignKey(
                name: "FK_UserExpenseMappers_AspNetUsers_FromUser",
                table: "UserExpenseMappers",
                column: "FromUser",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserExpenseMappers_AspNetUsers_FromUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropIndex(
                name: "IX_UserExpenseMappers_FromUser",
                table: "UserExpenseMappers");

            migrationBuilder.DropColumn(
                name: "Amount",
                table: "UserExpenseMappers");

            migrationBuilder.DropColumn(
                name: "FromUser",
                table: "UserExpenseMappers");
        }
    }
}
