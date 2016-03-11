using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AA.Mvp.Models
{
    public class AAMvpContext : DbContext
    {
        public AAMvpContext() : base("name=AAMvpContext")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<AAMvpContext>());
            //Database.Initialize(false);
        }

        public static AAMvpContext Create()
        {
            return new AAMvpContext();
        }

        public DbSet<AllDataType> AllDataTypes { get; set; }
        public DbSet<TypeOfType> TypeOfTypes { get; set; }
        public DbSet<Validation> Validations { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Use singular table names
            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            // Disable proxy creation and lazy loading; not wanted in this service context.
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;

            base.OnModelCreating(modelBuilder);

            //modelBuilder.Configurations.Add(new AllDataTypeMap());
            //modelBuilder.Configurations.Add(new TypeOfTypeMap());
            //modelBuilder.Configurations.Add(new ValidationMap());
        }
    }
}