<h1>Revature Social Network Platform</h1>

<h2>Project Description</h2>
<p>The Expense Reimbursement App will manage the process of reimbursing employees for expenses incurred while on company time. 
  All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. 
  Finance managers can log in and view all reimbursement requests and past history for all employees in the company. 
  Finance managers are authorized to approve and deny requests for expense reimbursement.
</p>

<h2>Technologies Used</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Angular</li>
  <li>Java</li>
  <li>PostgreSQL</li>
  <li>AWS RDS</li>
  <li>AWS S3</li>
</ul>

<h2>Features</h2>
<p>List of features ready and TODOs for future development</p>
<ul>
  <li>Color Coded expense table with filtering options</li>
  <li>Ability to check reimbursements regardless of status</li>
  <li>Animted login page</li>
</ul>

<p>To-Dos:</p>
<ul>
  <li>Add password encryption</li>
  <li>Improve Styling</li>
  <li>Add image upload for receipts</li>
</ul>

## Getting Started
clone into using: ```https://github.com/DavidHelfer1616/ProjectOneRepo```

To set up environment variables for windows:

1. Search "Edit the System Environment Variables"
2. Click "Environment Variables"
3. Under "System Variables", select "New"

Once you've done this you'll set them up to look like this:

Variable name = Variable value
```
AWS_RDS_ENDPOINT = [your database endpoint]
AWS_RDS_USERNAME = [your database username]
AWS_RDS_PASSWORD = [your databse password]
```

## Usage
Employees will log in using their username and password. They can then view a summary of any previously submitted reimbursement forms or at the top,
they can submit a new one. Employees can also select indiviual forms and view the details of that submission.

Financial Managers will log in using their username and password. They can then see all forms that are pending, approved, or denied by all Employees. At the top of the
table they have the option to sort by submission status. Financial Managers can see the details of specific submissions by clicking on them and if the
status is pending, they will also have the option to approve or deny it.
