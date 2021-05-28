const express = require('express');
const sequelize = require('./config/connection');
// const routes = require('./routes');
// import sequelize connection

const Users = require('./models/Users');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
app.listen(PORT, () => console.log('now listening'));
});
