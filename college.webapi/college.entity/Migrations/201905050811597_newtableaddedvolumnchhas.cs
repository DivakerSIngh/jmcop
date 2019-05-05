namespace college.entity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newtableaddedvolumnchhas : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.StudentAdmissionForm", "SubmittedStatus", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.StudentAdmissionForm", "SubmittedStatus");
        }
    }
}
