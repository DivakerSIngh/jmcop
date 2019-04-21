using college.models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;

namespace college.entity
{
    public partial class DBEntity : DbContext
    {

        public DBEntity() : base("name=collegeEntity") { }

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<Banner> Banner { get; set; }
        public virtual DbSet<Library> Library { get; set; }
        public virtual DbSet<Gallery> Gallery { get; set; }
        public virtual DbSet<Faculty> Faculty { get; set; }
        public virtual DbSet<Events> Events { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Facility> Facility { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var instance = System.Data.Entity.SqlServer.SqlProviderServices.Instance;
        }
      

    }
}
