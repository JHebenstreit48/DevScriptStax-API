In order to install Sequelize into your project with Node.js you would use the following command:

```shell
npm i sequelize
npm install sequelize
```

To fully set up full-stack React, you also have to install the following npm packages using npm third-party package installer and manager:

- You would do this after installing npm

```shell
npm i postgres
npm i express
npm i dotenv
```

To properly import Sequelize into a project, you will need to use the following command to import it into your Connection.ts file.

```shell
import { Sequelize } from 'sequelize';
```

You also need to import your dotenv file using the following import statement into your Connection.ts file.

```shell
import dotenv from 'dotenv';
```

The following commands are an example of how you would create a connection object to connect to a PostgreSQL database.

```shell
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD || '',
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );
```


