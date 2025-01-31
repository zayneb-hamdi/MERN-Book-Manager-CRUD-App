import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import  bookRoutes from './routes/bookRoutes.js' 



dotenv.config();
const app=express()
app.use(express.json())

app.use('/books',bookRoutes)

app.listen(5000,()=>
{
    connectDB();
    console.log("server is running on http://localhost:5000 hello")
})
//