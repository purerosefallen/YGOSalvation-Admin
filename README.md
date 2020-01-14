# YGOSalvation-Admin
Content Management System for YGOSalvation based on Strapi

# Setup
- Install [MongoDB](https://www.mongodb.com/download-center/community) as a service.
- Make sure MongoDB is running. It should appear as a service in Task Manager.
- Install [Nodist](https://github.com/nullivex/nodist/releases)
- Set Nodejs to version 10 or higher.
  ````PowerShell
  nodist 10
  ````
- Setup a MongoDB user
    - Inside the folder containing `mongodb.exe`, open the mongodb REPL.
    ```JavaScript
    use admin
    db.createUser({ user: "user" , pwd: "password", roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]})
    ```
- Use `.env.sample` to a create a `.env` file with the proper configurations, be sure to scramble and save the two keys.

    ```PowerShell
    nodist 10
    npm install
    cd src
    npm install
    ```

# Start
- `npm run start`
- In browser open http://localhost:1337/admin


# Configuration
- Create inital Admin account.
- Create a second account for Server Administration.
- Create Permission called `Server`.
- Add permissions so `Server` can see and edit `users`, `decks`, `replays`.
- Add permissions so `Public` can see `updates` and `backgrounds`.