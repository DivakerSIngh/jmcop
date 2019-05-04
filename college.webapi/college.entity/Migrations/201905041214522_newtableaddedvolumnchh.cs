namespace college.entity.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newtableaddedvolumnchh : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Enquiry", "Mobile", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Enquiry", "Mobile", c => c.Int(nullable: false));
        }
    }
}
