using AA.Mvp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace AA.Mvp.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<AAMvpContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "AA.Mvp.Models.AAMvpContext";
        }

        protected override void Seed(AAMvpContext context)
        {

            Seeding.Seed.DeleteAllData(context);
            Seeding.Seed.AddData(context);

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}