# node-es6-crm

Simple CRM project developed in node.js for evaluating advantages and disadvantages between using ES6 and Typescript for node 
projects.

This project is made using only ES6 and currently is a simple Contacts CRUD express server connecting to a 
Mongo database.

## Running
 
This project uses the [dotenv](https://github.com/motdotla/dotenv) module to load the environment variables, so on the 
root directory of the project use the following command to copy the env example file to the `.env` file that will be 
used to load the environment variables.

```bash
cp .env-example .env
```

Then, you can edit the Mongo `DB_USER`, the `DB_PASS`, `DB_NAME`, `DB_HOST` and the `PORT` environment variables with 
your data, like the following:

```bash
MONGO_DB_USER=user
MONGO_DB_PASS=pass
MONGO_DB_HOST=host.mlab.com:31812
MONGO_DB_NAME=dbname
PORT=3000
```

You can also pass the environment variables on your IDE. 
I use the [WebStorm](https://www.jetbrains.com/webstorm) IDE to debug my Node.js applications, which you can follow this
[tutorial](https://www.jetbrains.com/help/webstorm/run-debug-configuration-node-js.html) to set Node.js e environment variables 
in this IDE.

To start we can use:

    npm start

If everything is ok, the console will show the following message:

```bash
> node-es6-simple-crm@1.0.0 start /home/coderade/repo/personal/studies/node-simple-crm
> nodemon ./index.js --exec babel-node -e js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js
[nodemon] starting `babel-node ./index.js`
your server is running on port 3000

```
