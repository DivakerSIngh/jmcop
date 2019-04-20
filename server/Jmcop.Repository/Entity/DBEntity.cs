using System;
using System.Collections.Generic;
using Jmcop.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Jmcop.Repository.Entity
{
    public partial class DBEntity : DbContext
    {
        
        public DBEntity()
        {
          
        }
       

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<Banner> Banner { get; set; }
        public virtual DbSet<Library> Library { get; set; }
        public virtual DbSet<Gallery> Gallery { get; set; }
        public virtual DbSet<Faculty> Faculty { get; set; }
        public virtual DbSet<Events> Events { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Facility> Facility { get; set; }
        


        public DBEntity(DbContextOptions<DBEntity> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // optionsBuilder.UseSqlServer("Server=localhost\\;Database=jmcop_uat;Trusted_Connection=True;");
                
                optionsBuilder.UseSqlServer("Data Source=103.83.81.7;Initial Catalog=thmindsc_jmcop;Integrated Security=False;User ID=thmindsc_thmindsc;Password=Jmcop@123");

                


            }
        }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
