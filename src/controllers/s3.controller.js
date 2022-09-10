const { S3 } = require('../services/s3.service');

const uploadS3 = async (req, res) => {
    try {
        console.log('Entra a Controller');
        const { bucketName, data } = req.body;
        const newDocument = await S3.upload(bucketName, data);
        await console.log('Res controller '+newDocument);
    
        res.json({
            messaje: 'Success'
        });
        
    } catch (error) {
        res.json({
            messaje: 'Error'
        });
    }
}

module.exports.S3Controller = {
    uploadS3
}