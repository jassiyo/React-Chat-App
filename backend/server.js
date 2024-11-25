import express from 'express'
import dotenv from "dotenv"
import authRoutes from './Routes/auth.route.js'
import messageRoute from './Routes/message.route.js'
import connectToMongoDB from './Db/MongoDb.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();


// Middlewares
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)

// app.get('/',(req, res)=>{
//     res.send("hello world")
// })

app.listen(PORT ,()=>{
    connectToMongoDB();
    console.log(`server running on port: ${PORT}`)
})