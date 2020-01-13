# YGOSalvation-Admin
Content Management System for YGOSalvation based on Strapi

# Setup
- Install MongoDB
- Install Nodist
- Set Nodejs to version 10 or higher.
- Setup a MongoDB user
- Make sure MongoDB is running
- Use `.env.sample` to a create a `.env` file with the proper configurations

```
nodist 10
npm install strapi@alpha -g
npm install
cd src
npm install
```

# Start
- `npm run start`
- In browser open http://localhost:1337/admin
- Create inital Admin account

# Configuration
- Create Permission called `Server`
- Add permissions so `Server` can see and edit `users`, `decks`, `replays`
- Add permissions so `Public` can see `updates`