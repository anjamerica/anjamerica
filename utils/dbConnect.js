import mongoose from 'mongoose'
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig } = getConfig()
//console.log(serverRuntimeConfig.MONGODB_URL)
const MONGODB_URL = serverRuntimeConfig.MONGODB_URL;

//console.log(MONGODB_URL);

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected.')
        return;
    }

    mongoose.connect(serverRuntimeConfig.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {

        console.log('connected to mongo');
    })

    mongoose.connection.on('error', (err) => {

        console.log('Not connected to mongo', err);
    })
    
}

export default connectDB