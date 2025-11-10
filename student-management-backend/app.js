import mongoose from 'mongoose'; 
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config();
const app = express();

app.use(cors("http://localhost:5173/"));
app.use(express.json());

//Mongdb connection

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongodb Connected Successfuly"))
.catch(error=>console.error('Unable to connect to mongodb'))

app.get('/', (req,res)=>{
    res.send({ message:'Welcome to student management system'});
});

app.use('/api/students', studentRoutes)

const PORT = process.env.PORT||5000;

app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`));