This is a ASP.NET and Angular Web application for class. The purpose of the application is to add 'Owners' and 'Accounts'.

Link to Website hosted with AAWS ElasticBeanstalk
http://accountowner-dev.us-west-2.elasticbeanstalk.com/

UserName = guest
Password = def@123

AWS RDS was giving me problems (Service:AmazonCloudFormation, Message:Stack named 'awseb-e-iutdgcegfa-stack' aborted operation. Current state: 'UPDATE_ROLLBACK_IN_PROGRESS' Reason: null) Couldn't figure this out.

So a localhost with the provided scripts may be sufficient to see what the application may do.
Editing the appsetting.json -> connectionString to your localhost port 5000 will allow you to link up the localhost and application.
- Script_1.sql (Sets up the tables)
- Script_2.sql (Inputs fake data into the tables)
 
--------------------------------------------------------------------------------------
- There is MVC architecture
- ORM, 'Owner' and 'Account' tables. Owners can have many accounts but accounts can't have many owners. You can't delete an Owner without deleting Accounts under it. 
- SPA, there are GET and POST APIs.
- Dependency Injection. A Logger was implemented in the application. That is the LoggerService. It logs certain actions on the application and logs them to the location provided in the nlog.config file. 
- Authentication using JWT
- Authorization (Works on localhost)
--------------------------------------------------------------------------------------
Some Structures
The backend utilizes Interfaces and Wrappers (Respostiory Wrapper) to maintain clean code.
The frontend utilizes a Shared folder to maintain directives, services, and modals. Also, for the Owner and Account pages, there are folders that combines their appropriate components. A custom directive was made for datepicker (used for date types).

There is a 401 code when a user requests details of an owner (once data is present is on the Owner Actions page) They will be directed to the page but the information will be missing. 