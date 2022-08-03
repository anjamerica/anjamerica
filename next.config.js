
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL,{

  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
  dbName: process.env.MONGODB_DB_NAME

}, (err) => {
  if (!err) {
    return console.log("DB Connected");
  }

})




module.exports = {
  
  serverRuntimeConfig: {

    // Will only be available on the server side
    // mySecret: 'secret',
    mySecret: process.env.mySecret,
    MONGODB_URL: process.env.MONGODB_URL,
    

  },

  publicRuntimeConfig: {
    API_URL:process.env.API_URL
  },
}