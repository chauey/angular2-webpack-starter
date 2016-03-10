using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AA.Mvp.Models
{
    public abstract class BaseEntity
    {
        protected BaseEntity()
        {
            CreatedDate = DateTime.UtcNow;
            IsActive = true;
        }

        [Key]
        public int Id { get; set; }
        public Guid? Uid { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
    }
}