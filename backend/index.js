const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())
// const client = new MongoClient('mongodb://0.0.0.0:27017/?authMechanism=DEFAULT');
const client = new MongoClient('mongodb+srv://baispriti4:priti@cluster0.8wkbksc.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connect('mongodb://0.0.0.0:27017/?authMechanism=DEFAULT'
client.connect('mongodb+srv://baispriti4:priti@cluster0.8wkbksc.mongodb.net/?retryWrites=true&w=majority'
    //     , {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }
    )
    .then(()=>{console.log("Connected to MongoDB")})
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})