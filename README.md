# backend-login-page

admin login page to add, edit, update and delete user. Only admin users are
allowed to access/edit the users.

New Environment:

After clone or download, do the following:

1. npm init
2. migrations - (npx sequelize db:migrate)
3. seeder - (sequelize db:see:all)

Testing: Tested using Postman, but there are some configuration needed as
follows:

1. For the "Login Admin User" request, add:

- pm.environment.set("TOKEN", pm.response.json().token) in the [Tests] tab of
  the Headers.

2. In the "Logout Admin" request, add:

-pm.environment.set("TOKEN", '')

3. In each of the requests (e.g. Get List Users, DELETE a User, etc), configure
   the "TOKEN' variable by clicking [Authorization] tab of the headers and
   selecting "Bearer Token" then specify/input at Token field - {{TOKEN}}
