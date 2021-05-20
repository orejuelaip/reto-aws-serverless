'use strict';
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
import swaggerui from 'swagger-ui-express'
import swagegerJsDoc from 'swagger-jsdoc'

const cors = require("cors");
const dbConfig = require("./config");


const specs = swagegerJsDoc(dbConfig.options)


const app = express();

//server
app.use(cors);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// para content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// documentacion de rutas
app.use('/docs',swaggerui.serve,swaggerui.setup(specs))

// database
const db = require("./src/models");

db.sequelize.sync( { force: true } );
 

// api routes
app.get('/', (req, res) => {
  res.send('Hola Mundo con Expressjs');
});

require("./src/routes/vehicles.routes")(app);

module.exports.generic =   serverless(app);
