const express = require('express')
require("dotenv").config()
const app = express();
const port = process.env.port || 3000
const product_router = require('./routes/product')
const connectDB = require('./db/connect')

app.get('/',(req, res)=>{
    res.send("Hi, im live")
})

// midlewere

app.use('/api/products', product_router)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log("listening on port  " + port )
        });
    } catch (error) {
        console.log(error);
    }
}

start();