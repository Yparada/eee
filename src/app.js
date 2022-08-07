const express = require('express');
const { json } = require('express');
const morgan = require('morgan');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//export default app;
module.exports.AppProject = {
    app
}