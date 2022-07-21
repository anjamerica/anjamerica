import aws, { S3 } from 'aws-sdk';



aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION,
});


export const s3 = new aws.S3();