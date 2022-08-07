const express = require('express');
const { json } = require('express');
const morgan = require('morgan');
const { S3Router } = require('./routes/s3.route');

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());


app.use('/v1/s3', S3Router.router); 

//export default app;
module.exports.AppProject = {
    app
}