using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AA.Mvp.Models
{
    public partial class Validation : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public int Integer { get; set; }
        public string String { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.DateTime> BeforeDate { get; set; }
        public Nullable<System.DateTime> AfterDate { get; set; }
        public Nullable<int> Age { get; set; }
        public string CreditCard { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string URL { get; set; }
        public string Zip { get; set; }
        public string StartsWithDPT { get; set; }
        public string ContainsDPT { get; set; }
    }
}