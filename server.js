const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet())
app.use(cors())

// env
require("dotenv").config();
// db
const sequelize = require('./config/db');

const routes = require('./routes/index');
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// routes
app.use('/api/v1/', routes);

// db connection
try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}


app.listen(port, () => {
    console.log(`Listen on port: ${port}`);
});