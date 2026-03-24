require('dotenv').config()
const app = require('./src/appgit')
const connectToDB = require('./src/config/database')
connectToDB()

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("server is running " + PORT);
  
})