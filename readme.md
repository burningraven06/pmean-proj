## Sequelize Tryout

*Can't really vouch for Sequelize though (not my cup of tea)*

- Backend - Express (with JS)
- Frontend - Angular (with TS)
- NonRel-Database - Mongo + Mongoose (ORM)
- Rel-Database - PG + Sequelize (ORM)
- Authentication - JWT
- Frontend Design - Bootstrap


## To Test This 

#### DB SETUP

```sh 
$ cd pmean-proj
$ touch backend/mongo-dbconn/dbConnStr.js
$ touch backend/pg-dbconn/dbConnStr.js
```

#### DB Connection Info 
```sh
#Update backend/mongo-dbconn/dbConnStr.js 
module.exports = <MONGO_DB_URL_HERE>```

#Update backend/pg-dbconn/dbConnStr.js
module.exports = <PG_DB_URL_HERE>```
```

#### INSTALL PACKAGE DEPENDENCIES

```sh 
#Install Dependencies for Backend
$ cd pmean-proj/backend
$ yarn install

# Or if you prefer npm
$ npm install


#Install Dependencies for Frontend & Build


#Install Dependencies
$ cd pmean-proj/frontend
$ yarn install

# Or if you prefer npm
$ npm install

#Build Dist to Serve
$ ng build
```

#### RUN APP
```sh
$ cd pmean-proj
$ yarn run start-app

# Or with npm
$ npm run start-app
```
