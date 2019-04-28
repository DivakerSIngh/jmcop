namespace college.entity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newdb : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AdminUser",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        Password = c.String(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Banner",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ImgUrl = c.String(nullable: false),
                        Status = c.Boolean(nullable: false),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Course",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        Seates = c.Int(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Department",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        ImgUrl = c.String(),
                        Description = c.String(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Events",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ImgUrl = c.String(),
                        Name = c.String(),
                        Description = c.String(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Facility",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        ImgUrl = c.String(nullable: false),
                        Type = c.Int(nullable: false),
                        Description = c.String(),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Faculty",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ImgUrl = c.String(),
                        Name = c.String(nullable: false),
                        Designation = c.String(),
                        Qualification = c.String(),
                        Description = c.String(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Gallery",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ImgUrl = c.String(),
                        Description = c.String(nullable: false),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Library",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ImgUrl = c.String(),
                        Name = c.String(),
                        Description = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.StudentAdmissionForm",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CandidateName = c.String(nullable: false),
                        FatherName = c.String(nullable: false),
                        MotherName = c.String(nullable: false),
                        Mobile = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        Address = c.String(nullable: false),
                        State = c.String(nullable: false),
                        City = c.String(nullable: false),
                        CourseType = c.Int(nullable: false),
                        RegistrationNumber = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.StudentQualificationMapping",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Class = c.String(nullable: false),
                        YearOfPassing = c.String(nullable: false),
                        Subjects = c.String(nullable: false),
                        Boards = c.String(nullable: false),
                        StudentAdmissionID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.StudentAdmissionForm", t => t.StudentAdmissionID, cascadeDelete: true)
                .Index(t => t.StudentAdmissionID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.StudentQualificationMapping", "StudentAdmissionID", "dbo.StudentAdmissionForm");
            DropIndex("dbo.StudentQualificationMapping", new[] { "StudentAdmissionID" });
            DropTable("dbo.StudentQualificationMapping");
            DropTable("dbo.StudentAdmissionForm");
            DropTable("dbo.Library");
            DropTable("dbo.Gallery");
            DropTable("dbo.Faculty");
            DropTable("dbo.Facility");
            DropTable("dbo.Events");
            DropTable("dbo.Department");
            DropTable("dbo.Course");
            DropTable("dbo.Banner");
            DropTable("dbo.AdminUser");
        }
    }
}
