# backend-login-page

Application to add, edit, delete and display list of users with an access of
"admin" roles. However, admin user should have logged in to return token that
allows the operation.

New Environment:

After clone or download, do the following in sequence/order:

1. npm install
2. migrations:
   - At the terminal window, run the command > "npx sequelize-cli db:migrate"
3. seeder
   - Run the command > "npx sequelize db:seed --seed 20220119063230-Users.js"

Testing: Tool: Postman

Configure the postman as follow:

1. For the "Login Admin User" request, add (in the [Tests] tab of the headers):

- pm.environment.set("TOKEN", pm.response.json().token)

2. In the "Logout Admin" request, add (in the [Tests] tab of the headers):

-pm.environment.set("TOKEN", '')

3. In each of the requests (e.g. Get List Users, DELETE a User, etc), configure
   the "TOKEN' variable by clicking [Authorization] tab of the headers and
   selecting "Bearer Token" then specify/input at Token field - {{TOKEN}}

Test Cases:

1. Login using "admin" user roles Expected:
