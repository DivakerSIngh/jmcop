namespace college.entity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newtables : DbMigration
    {
        public override void Up()
        {
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
        }
    }
}
