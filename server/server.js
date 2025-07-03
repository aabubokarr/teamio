import express from "express"
import connectDB from "./db/database.js"

connectDB()

const app = express()

app.get('/', (req, res)=> {
    res.send("Working")
})

app.listen(8000, (err)=>{
    console.log('Port listening on 8000')
})