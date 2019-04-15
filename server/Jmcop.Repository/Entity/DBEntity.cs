using System;
using System.Collections.Generic;
using Jmcop.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

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
                optionsBuilder.UseSqlServer("Server=localhost\\;Database=jmcop;Trusted_Connection=True;");
               
            }
        }

      
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
