using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AA.Mvp.Models
{
    public partial class TypeOfType : BaseEntity
    {
        public TypeOfType()
        {
            this.TypeOfTypes1 = new List<TypeOfType>();
            this.TypeOfTypes11 = new List<TypeOfType>();
        }
        [Key]
        public Guid Id { get; set; }

        public string Abbreviation { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
        public Nullable<int> Order { get; set; }
        public Nullable<Guid> ParentID { get; set; }
        public Nullable<Guid> TypeID { get; set; }
        public string Value { get; set; }
        public virtual ICollection<TypeOfType> TypeOfTypes1 { get; set; }
        public virtual TypeOfType TypeOfType1 { get; set; }
        public virtual ICollection<TypeOfType> TypeOfTypes11 { get; set; }
        public virtual TypeOfType TypeOfType2 { get; set; }
    }
}