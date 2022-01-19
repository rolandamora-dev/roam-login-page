# LoginPage API

> Backend API for User application to add, edit, delete and display list of
> users.

> The access level is only allowed for "admin' role users which access token is
> provided upon logged in.

### Usage

> Update the DB configuration in "config/config.json" with your own settings.

### Install Dependencies

```
npm install
```

### Run migrations and seeder

```
npx sequelize-cli db:migrate
```

```
npx sequelize db:seed --seed 20220119063230-Users.js
```

### Run in dev mode

```
npm run dev
```

## TESTING

#### Tool: Postman

### Configure Postman

Add below in the [Tests] tab of the request header for the "Login Admin User"
request.

```
pm.environment.set("TOKEN", pm.response.json().token)
```

Add below (same header [Tests] tab) for "Logout Admin" request.

```
pm.environment.set("TOKEN", '')
```

Configure the remaining requests (e.g. Get List Users, Delete User, etc) to have
a token in [Authorization].

- In [Authorization] tab
- select Type: Bearer Token
- and type at Token: {{TOKEN}}

### Test Cases:

#### Request Route

1. Login using "admin" user roles
   - Expected Output: Received a token.
2. Perform CRUD operations after login using admin role user.
   - Expected: Actions reflected to the records in the database.
3. Logout admin user
   - Expected: Token is reset.
4. Perform CRUD operations after logged-out.
   - Expected: Throw and exception/message for unauthorized access.

#### Note: for Endpoints, please refer to the document in Public folder or

http://localhost:3000 (in the browser)

#### Migration and Seeder

1. Run command # 2 "npx sequelize-cli db:migrate"
   - Expected: Creates database table in the host specified in the config.
2. Run command "npx sequelize db:seed --seed 20220119063230-Users.js
   - Expected: Populate initial data in the table in host specified in the
     config.

##### Version 1.0.0
