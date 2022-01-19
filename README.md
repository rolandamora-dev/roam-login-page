# backend-login-page

Rest API to add, edit, delete and display list of users. The access level are
only allowed for "admin' user roles provided access token when logged is
provided upon log in.

New Environment:

After clone or download, do the following in sequence/order:

1. npm install
2. Update the DB config in config.json (in config folder)
3. migrations:
   - At the terminal window, run the command > "npx sequelize-cli db:migrate"
4. seeder
   - Run the command > "npx sequelize db:seed --seed 20220119063230-Users.js"
5. Run development via command - "npm run dev"

#TESTING: (Tool: Postman)

Configure the postman as follows:

1. For the "Login Admin User" request, add (in the [Tests] tab of the headers):

- pm.environment.set("TOKEN", pm.response.json().token)

2. In the "Logout Admin" request, add (in the [Tests] tab of the headers):

-pm.environment.set("TOKEN", '')

3. In each of the requests (e.g. Get List Users, DELETE a User, etc), configure
   the "TOKEN' variable by clicking [Authorization] tab of the headers and
   selecting "Bearer Token" then specify/input at Token field - {{TOKEN}}

#TEST CASES: Routing:

1. Login using "admin" user roles Expected: Token is provided
2. Perform CRUD with access token Expected: Can perform access
3. Perform CRUD with no access token Expected: Response error 'Unauthorized to
   access the routes'.

Note: for Endpoints, please refer to the document in Public folder.

#Migration and Seeder:

1. Run command # 2 "npx sequelize-cli db:migrate" Expected: Create database
   table "login_page" in host specified in "congif.json".
2. Run command "npx sequelize db:seed --seed 20220119063230-Users.js Expected:
   Populate initial data in the table in host specified in the config.
