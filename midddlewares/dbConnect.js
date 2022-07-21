// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URL






// async function dbConnect() {

//     try {

//         if (!MONGODB_URI) {
//             throw new Error(
//                 'Please define the MONGODB_URI environment variable inside .env.local'
//             )
//         }


//         let cached = global.mongoose

//         if (!cached) {
//             cached = global.mongoose = { conn: null, promise: null }
//         }



//         if (cached.conn) {
//             console.log("DB connected cached")
//             return cached.conn;
//         }
//         if (!cached.promise) {

//             const opts = {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//                 autoIndex:false
//             }


//             cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
//                 return mongoose
//             })

//         }



//         cached.conn = await cached.promise
//         console.log("DB connected new")
//         return cached.conn




//         // connection.isConnected=db.connections[0].readyState;
//     } catch (e) {
//         console.error(e);
//     }
// }


// export default dbConnect;