using AA.Mvp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AA.Mvp.Seeding
{
    internal static class Seed
    {
        public static void DeleteAllData(AAMvpContext context)
        {
            // Base Entities
            context.AllDataTypes.RemoveRange(context.AllDataTypes.ToList());
            context.TypeOfTypes.RemoveRange(context.TypeOfTypes.ToList());
            context.Validations.RemoveRange(context.Validations.ToList());

            context.SaveChanges();
        }

        public static void AddData(AAMvpContext context)
        {
            #region Add Data for Base Entities

            context.AllDataTypes.AddRange(AllDataTypeList(context));

            context.Validations.AddRange(ValidationList(context));

            #endregion
        }

        public static List<AllDataType> AllDataTypeList(AAMvpContext context)
        {
            List<AllDataType> list = new List<AllDataType>();

            list.Add(new AllDataType
            {
                //ObjectState = ObjectState.Added,
                Id = 1,
                BigInt = 1,
                Bit = true,
                Char = "Test Char",
                Date = DateTime.UtcNow,
                UniqueIdentifier = Guid.NewGuid(),
            });

            return list;
        }

        public static List<Validation> ValidationList(AAMvpContext context)
        {
            List<Validation> list = new List<Validation>();
            //User user = context.Users.FirstOrDefault();
            list.Add(new Validation
            {
                //ObjectState = ObjectState.Added,
                Id = Guid.NewGuid(),
                Integer = 5,
                String = "Name String",
                Date = DateTime.UtcNow,
                BeforeDate = DateTime.UtcNow.AddDays(-1),
                AfterDate = DateTime.UtcNow.AddDays(1),
                Age = 15,
                CreditCard = string.Empty,
                Email = "a123@a1234.com",
                Phone = "123456789",
                URL = "http://abc.cm",
                Zip = "78965",
                StartsWithDPT = "dnacss",
                ContainsDPT = "abcdnadef",
            });

            for (int i = 0; i < 25; i++)
            {
                list.Add(new Validation
                {
                    //ObjectState = ObjectState.Added,
                    Id = Guid.NewGuid(),
                    Integer = i,
                    String = "String " + i.ToString()
                });
            }

            return list;
        }
    }
}