using Dna.Mvp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dna.Mvp.Seeding
{
    internal static class Seed
    {
        public static void DeleteAllData(DnaMvpContext context)
        {
            // Base Entities
            List<AllDataType> allDataTypes = context.AllDataTypeList.ToList();
            allDataTypes.ForEach(x => x.ObjectState = ObjectState.Deleted);
            List<TypeOfType> typeOfType = context.TypeOfTypeList.ToList();
            typeOfType.ForEach(x => x.ObjectState = ObjectState.Deleted);
            List<Validation> validations = context.ValidationList.ToList();
            validations.ForEach(x => x.ObjectState = ObjectState.Deleted);

            context.SaveChanges();
        }

        public static void AddData(DnaMvpContext context)
        {
            #region Add Data for Base Entities

            context.AllDataTypeList.AddRange(AllDataTypeList(context));

            context.ValidationList.AddRange(ValidationList(context));

            #endregion
        }

        public static List<AllDataType> AllDataTypeList(DnaMvpContext context)
        {
            List<AllDataType> list = new List<AllDataType>();

            list.Add(new AllDataType
            {
                ObjectState = ObjectState.Added,
                Id = Guid.NewGuid(),
                BigInt = 1,
                Bit = true,
                Char = "Test Char",
                Date = DateTime.UtcNow,
                UniqueIdentifier = Guid.NewGuid(),
            });

            return list;
        }

        public static List<Validation> ValidationList(DnaMvpContext context)
        {
            List<Validation> list = new List<Validation>();
            //User user = context.Users.FirstOrDefault();
            list.Add(new Validation
            {
                ObjectState = ObjectState.Added,
                Integer = 5,
                String = "Name String",
                Date = DateTime.UtcNow,
                BeforeDate = DateTime.UtcNow.AddDays(-1),
                AfterDate = DateTime.UtcNow.AddDays(1),
                Age = 15,
                CreditCard = 123456789,
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
                    ObjectState = ObjectState.Added,
                    Integer = i,
                    String = "String " + i.ToString()
                });
            }

            return list;
        }
    }
}