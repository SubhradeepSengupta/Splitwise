﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Splitwise.DomainModel.Models;

namespace Splitwise.DomainModel.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");

                    b.HasDiscriminator<string>("Discriminator").HasValue("IdentityUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Activity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<int?>("GroupID");

                    b.Property<string>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("GroupID");

                    b.HasIndex("UserID");

                    b.ToTable("Activities");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Category", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Currency", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.ToTable("Currencies");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Friend", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FriendID");

                    b.Property<int?>("GroupID");

                    b.Property<string>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("FriendID");

                    b.HasIndex("GroupID");

                    b.HasIndex("UserID");

                    b.ToTable("Friends");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Group", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Category");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("InviteLink");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Note");

                    b.Property<bool>("SimplifyDebts");

                    b.HasKey("ID");

                    b.HasIndex("Category");

                    b.HasIndex("CreatedBy");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.GroupExpenseMapper", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CurrencyID");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<int?>("GroupID");

                    b.Property<bool>("IsDeleted");

                    b.Property<bool>("IsSettled");

                    b.Property<string>("Name");

                    b.Property<string>("Payee");

                    b.Property<string>("SplitType");

                    b.Property<float>("TotalAmount");

                    b.HasKey("ID");

                    b.HasIndex("CurrencyID");

                    b.HasIndex("GroupID");

                    b.HasIndex("Payee");

                    b.ToTable("GroupExpenseMappers");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Language", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.ToTable("Languages");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Notification", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.HasKey("ID");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Settlement", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("Amount");

                    b.Property<DateTime>("Date");

                    b.Property<int?>("ExpenseID");

                    b.Property<string>("Payee");

                    b.Property<string>("Payer");

                    b.HasKey("ID");

                    b.HasIndex("ExpenseID");

                    b.HasIndex("Payee");

                    b.HasIndex("Payer");

                    b.ToTable("Settlements");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.UserExpenseMapper", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float?>("Amount");

                    b.Property<int?>("CurrencyID");

                    b.Property<int?>("ExpenseID");

                    b.Property<string>("FromUser");

                    b.HasKey("ID");

                    b.HasIndex("CurrencyID");

                    b.HasIndex("ExpenseID");

                    b.HasIndex("FromUser");

                    b.ToTable("UserExpenseMappers");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.UserGroupMapper", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("GroupID");

                    b.Property<string>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("GroupID");

                    b.HasIndex("UserID");

                    b.ToTable("UserGroupMappers");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.UserNotificationMapper", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsEnabled");

                    b.Property<int?>("NotificationID");

                    b.Property<string>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("NotificationID");

                    b.HasIndex("UserID");

                    b.ToTable("UserNotificationMappers");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.ApplicationUser", b =>
                {
                    b.HasBaseType("Microsoft.AspNetCore.Identity.IdentityUser");

                    b.Property<int?>("CurrencyID");

                    b.Property<string>("FullName");

                    b.Property<int?>("LanguageID");

                    b.HasIndex("CurrencyID");

                    b.HasIndex("LanguageID");

                    b.ToTable("ApplicationUser");

                    b.HasDiscriminator().HasValue("ApplicationUser");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Activity", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Group", "Groups")
                        .WithMany()
                        .HasForeignKey("GroupID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserID");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Friend", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Friends")
                        .WithMany()
                        .HasForeignKey("FriendID");

                    b.HasOne("Splitwise.DomainModel.Models.Group", "Groups")
                        .WithMany()
                        .HasForeignKey("GroupID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Users")
                        .WithMany()
                        .HasForeignKey("UserID");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Group", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Category", "Categories")
                        .WithMany()
                        .HasForeignKey("Category");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Users")
                        .WithMany()
                        .HasForeignKey("CreatedBy");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.GroupExpenseMapper", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Currency", "Currencies")
                        .WithMany()
                        .HasForeignKey("CurrencyID");

                    b.HasOne("Splitwise.DomainModel.Models.Group", "Groups")
                        .WithMany()
                        .HasForeignKey("GroupID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Payees")
                        .WithMany()
                        .HasForeignKey("Payee");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.Settlement", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.GroupExpenseMapper", "Expenses")
                        .WithMany()
                        .HasForeignKey("ExpenseID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Payees")
                        .WithMany()
                        .HasForeignKey("Payee");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Payers")
                        .WithMany()
                        .HasForeignKey("Payer");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.UserExpenseMapper", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Currency", "Currencies")
                        .WithMany()
                        .HasForeignKey("CurrencyID");

                    b.HasOne("Splitwise.DomainModel.Models.GroupExpenseMapper", "Expenses")
                        .WithMany()
                        .HasForeignKey("ExpenseID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Payer")
                        .WithMany()
                        .HasForeignKey("FromUser");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.UserGroupMapper", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Group", "Groups")
                        .WithMany("UserGroupMappers")
                        .HasForeignKey("GroupID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Users")
                        .WithMany("UserGroupMappers")
                        .HasForeignKey("UserID");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.UserNotificationMapper", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Notification", "Notifications")
                        .WithMany()
                        .HasForeignKey("NotificationID");

                    b.HasOne("Splitwise.DomainModel.Models.ApplicationUser", "Users")
                        .WithMany()
                        .HasForeignKey("UserID");
                });

            modelBuilder.Entity("Splitwise.DomainModel.Models.ApplicationUser", b =>
                {
                    b.HasOne("Splitwise.DomainModel.Models.Currency", "Currencies")
                        .WithMany()
                        .HasForeignKey("CurrencyID");

                    b.HasOne("Splitwise.DomainModel.Models.Language", "Languages")
                        .WithMany()
                        .HasForeignKey("LanguageID");
                });
#pragma warning restore 612, 618
        }
    }
}
