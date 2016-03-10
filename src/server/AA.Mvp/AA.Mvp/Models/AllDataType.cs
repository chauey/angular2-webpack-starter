using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AA.Mvp.Models
{
    public partial class AllDataType : BaseEntity
    {
        public Nullable<long> BigInt { get; set; }
        public byte[] Binary { get; set; }
        public Nullable<bool> Bit { get; set; }
        public string Char { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.DateTime> DateTime { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime? DateTime2 { get; set; }
        public Nullable<System.DateTimeOffset> DateTimeOffset { get; set; }
        public Nullable<decimal> Decimal { get; set; }
        public Nullable<double> Float { get; set; }
        public System.Data.Entity.Spatial.DbGeography Geography { get; set; }
        public System.Data.Entity.Spatial.DbGeometry Geometry { get; set; }
        public byte[] Image { get; set; }
        public Nullable<int> Int { get; set; }
        public Nullable<decimal> Money { get; set; }
        public string NChar { get; set; }
        public string NText { get; set; }
        public Nullable<decimal> Numeric { get; set; }
        public string NVarChar { get; set; }
        public string NVarCharMax { get; set; }
        public Nullable<float> Real { get; set; }
        public Nullable<System.DateTime> SmallDateTime { get; set; }
        public Nullable<short> SmallInt { get; set; }
        public Nullable<decimal> SmallMoney { get; set; }
        public string Text { get; set; }
        public Nullable<System.TimeSpan> Time { get; set; }
        public Nullable<byte> TinyInt { get; set; }
        public Nullable<System.Guid> UniqueIdentifier { get; set; }
        public byte[] VarBinary { get; set; }
        public byte[] VarBinaryMax { get; set; }
        public string VarChar { get; set; }
        public string VarCharMax { get; set; }
        public string Xml { get; set; }
        public string ZHierarchyID { get; set; }
        public string ZSql_Variant { get; set; }
    }
}