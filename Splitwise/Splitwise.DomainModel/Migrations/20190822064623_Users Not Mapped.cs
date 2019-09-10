using Microsoft.EntityFrameworkCore.Migrations;

namespace Splitwise.DomainModel.Migrations
{
    public partial class UsersNotMapped : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_AspNetUsers_CreatedBy",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_UserGroupMappers_AspNetUsers_UserID",
                table: "UserGroupMappers");

            migrationBuilder.DropIndex(
                name: "IX_UserGroupMappers_UserID",
                table: "UserGroupMappers");

            migrationBuilder.DropIndex(
                name: "IX_Groups_CreatedBy",
                table: "Groups");

            migrationBuilder.AlterColumn<string>(
                name: "UserID",
                table: "UserGroupMappers",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "UserGroupMappers",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Groups",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserGroupMappers_ApplicationUserId",
                table: "UserGroupMappers",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserGroupMappers_AspNetUsers_ApplicationUserId",
                table: "UserGroupMappers",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserGroupMappers_AspNetUsers_ApplicationUserId",
                table: "UserGroupMappers");

            migrationBuilder.DropIndex(
                name: "IX_UserGroupMappers_ApplicationUserId",
                table: "UserGroupMappers");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "UserGroupMappers");

            migrationBuilder.AlterColumn<string>(
                name: "UserID",
                table: "UserGroupMappers",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Groups",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserGroupMappers_UserID",
                table: "UserGroupMappers",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Groups_CreatedBy",
                table: "Groups",
                column: "CreatedBy");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_AspNetUsers_CreatedBy",
                table: "Groups",
                column: "CreatedBy",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserGroupMappers_AspNetUsers_UserID",
                table: "UserGroupMappers",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
