const express = require('express')
const app = express();

const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const routes = require("./routes");
const sequelize = require("./config/db").sequelize;
const path = require("path")
const dotenv = require('dotenv').config();
require("./models/index");

app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: process.env.SECRET,
    saveUninitialized: false
}))

sequelize.sync({ force: false }).then(function() {
    console.log("> Base de datos sincronizada correctamente.");
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)))
app.engine('.html', require('ejs').renderFile);
app.set('views', require("path").join(__dirname,'views'))

app.use(routes);

module.exports = app;