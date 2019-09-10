using Microsoft.EntityFrameworkCore.Migrations;

namespace Splitwise.DomainModel.Migrations
{
    public partial class UsersNotMapped2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Groups",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_AspNetUsers_CreatedBy",
                table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_CreatedBy",
                table: "Groups");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Groups",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
