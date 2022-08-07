const { Router } = require('express');
const router = Router();
const { S3Controller } = require('../controllers/s3.controller');

router.post('/', S3Controller.uploadS3);
// const routes = () => {
// }

module.exports.S3Router = {
    router
}