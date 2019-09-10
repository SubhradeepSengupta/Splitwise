using Microsoft.EntityFrameworkCore.Migrations;

namespace Splitwise.DomainModel.Migrations
{
    public partial class ModelUpdated1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Amount",
                table: "UserExpenseMappers",
                nullable: true,
                oldClrType: typeof(float));

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "GroupExpenseMappers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "GroupExpenseMappers");

            migrationBuilder.AlterColumn<float>(
                name: "Amount",
                table: "UserExpenseMappers",
                nullable: false,
                oldClrType: typeof(float),
                oldNullable: true);
        }
    }
}
