namespace college.entity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newtableaddedvolumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Enquiry", "Mobile", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Enquiry", "Mobile");
        }
    }
}
