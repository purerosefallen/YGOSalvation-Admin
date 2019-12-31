# YGOSalvation-Admin
Content Management System for YGOSalvation based on Strapi

#Setup
- Install MongoDB
- Install Nodist

```
nodist 10
npm install strapi@alpha -g
npm install
cd src
npm install
```
#Configuration
- In `src/configuration/enviroments/<enviroment>/database.json` edit the connection information
```
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "strapi-hook-mongoose",
      "settings": {
        "client": "mongo",
        "host": "127.0.0.1",
        "port": 27017,
        "database": "salvation",
        "username": "<username>",
        "password": "<password"
      },
      "options": {}
    }
  }
}
```

#Start
```
cd ./src
strapi start
```
- In browser open http://localhost:1337/admin