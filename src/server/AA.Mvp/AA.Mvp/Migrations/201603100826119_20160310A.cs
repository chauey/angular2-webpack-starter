namespace AA.Mvp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _20160310A : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AllDataTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BigInt = c.Long(),
                        Binary = c.Binary(),
                        Bit = c.Boolean(),
                        Char = c.String(),
                        Date = c.DateTime(),
                        DateTime = c.DateTime(),
                        DateTime2 = c.DateTime(precision: 7, storeType: "datetime2"),
                        DateTimeOffset = c.DateTimeOffset(precision: 7),
                        Decimal = c.Decimal(precision: 18, scale: 2),
                        Float = c.Double(),
                        Geography = c.Geography(),
                        Geometry = c.Geometry(),
                        Image = c.Binary(),
                        Int = c.Int(),
                        Money = c.Decimal(precision: 18, scale: 2),
                        NChar = c.String(),
                        NText = c.String(),
                        Numeric = c.Decimal(precision: 18, scale: 2),
                        NVarChar = c.String(),
                        NVarCharMax = c.String(),
                        Real = c.Single(),
                        SmallDateTime = c.DateTime(),
                        SmallInt = c.Short(),
                        SmallMoney = c.Decimal(precision: 18, scale: 2),
                        Text = c.String(),
                        Time = c.Time(precision: 7),
                        TinyInt = c.Byte(),
                        UniqueIdentifier = c.Guid(),
                        VarBinary = c.Binary(),
                        VarBinaryMax = c.Binary(),
                        VarChar = c.String(),
                        VarCharMax = c.String(),
                        Xml = c.String(),
                        ZHierarchyID = c.String(),
                        ZSql_Variant = c.String(),
                        Uid = c.Guid(),
                        IsActive = c.Boolean(),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.Int(),
                        UpdatedBy = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TypeOfTypes",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Abbreviation = c.String(),
                        Name = c.String(),
                        Key = c.String(),
                        Order = c.Int(),
                        ParentID = c.Guid(),
                        TypeID = c.Guid(),
                        Value = c.String(),
                        Uid = c.Guid(),
                        IsActive = c.Boolean(),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.Int(),
                        UpdatedBy = c.Int(),
                        TypeOfType1_Id = c.Guid(),
                        TypeOfType2_Id = c.Guid(),
                        TypeOfType_Id = c.Guid(),
                        TypeOfType_Id1 = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.TypeOfTypes", t => t.TypeOfType1_Id)
                .ForeignKey("dbo.TypeOfTypes", t => t.TypeOfType2_Id)
                .ForeignKey("dbo.TypeOfTypes", t => t.TypeOfType_Id)
                .ForeignKey("dbo.TypeOfTypes", t => t.TypeOfType_Id1)
                .Index(t => t.TypeOfType1_Id)
                .Index(t => t.TypeOfType2_Id)
                .Index(t => t.TypeOfType_Id)
                .Index(t => t.TypeOfType_Id1);
            
            CreateTable(
                "dbo.Validations",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Integer = c.Int(nullable: false),
                        String = c.String(),
                        Date = c.DateTime(),
                        BeforeDate = c.DateTime(),
                        AfterDate = c.DateTime(),
                        Age = c.Int(),
                        CreditCard = c.String(),
                        Email = c.String(),
                        Phone = c.String(),
                        URL = c.String(),
                        Zip = c.String(),
                        StartsWithDPT = c.String(),
                        ContainsDPT = c.String(),
                        Uid = c.Guid(),
                        IsActive = c.Boolean(),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.Int(),
                        UpdatedBy = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TypeOfTypes", "TypeOfType_Id1", "dbo.TypeOfTypes");
            DropForeignKey("dbo.TypeOfTypes", "TypeOfType_Id", "dbo.TypeOfTypes");
            DropForeignKey("dbo.TypeOfTypes", "TypeOfType2_Id", "dbo.TypeOfTypes");
            DropForeignKey("dbo.TypeOfTypes", "TypeOfType1_Id", "dbo.TypeOfTypes");
            DropIndex("dbo.TypeOfTypes", new[] { "TypeOfType_Id1" });
            DropIndex("dbo.TypeOfTypes", new[] { "TypeOfType_Id" });
            DropIndex("dbo.TypeOfTypes", new[] { "TypeOfType2_Id" });
            DropIndex("dbo.TypeOfTypes", new[] { "TypeOfType1_Id" });
            DropTable("dbo.Validations");
            DropTable("dbo.TypeOfTypes");
            DropTable("dbo.AllDataTypes");
        }
    }
}
