using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Splitwise.DomainModel.Models
{
    public class ApplicationDbContext : IdentityDbContext
    {
        #region Properties

        public DbSet<Activity> Activities { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<GroupExpenseMapper> GroupExpenseMappers { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Settlement> Settlements { get; set; }
        public DbSet<UserExpenseMapper> UserExpenseMappers { get; set; }
        public DbSet<UserGroupMapper> UserGroupMappers { get; set; }
        public DbSet<UserNotificationMapper> UserNotificationMappers { get; set; }

        #endregion


        #region Constructors

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        // parameterless constructor

        public ApplicationDbContext()
        {

        }

        #endregion
    }
}
