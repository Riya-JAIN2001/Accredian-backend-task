Features
List key features of your application.

User registration with email and password
Referral system to send emails to new users
...
Prerequisites
Specify any prerequisites or dependencies required to run your project.

Node.js (version)
npm or yarn
Database (e.g., PostgreSQL, MySQL) configured and running
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd project-directory
Install dependencies:

bash
Copy code
npm install
Configuration
Environment Variables
Create a .env file in the root directory with the following variables:

makefile
Copy code
user=your_gmail_username
pass=your_gmail_password
DATABASE_URL=your_database_url
Database Setup
Ensure your database is set up and configured correctly. Modify the DATABASE_URL in your .env file accordingly.

Usage
Start the application:

bash
Copy code
npm start
Your application will be running on http://localhost:3000.

Endpoints
User Routes
POST /api/user/create
Registers a new user with email and password.
Referral Routes
POST /api/send/refer
Sends a referral email to the specified email address.
Technologies Used
Node.js
Express.js
Prisma ORM
Nodemailer
PostgreSQL (or your preferred database)
Axios (if used for HTTP requests)
