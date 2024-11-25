import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';

// Routes
import authRoutes from './Routes/auth.route.js'
import messageRoutes from './Routes/message.route.js'
import userRoutes from './Routes/user.route.js'

// Database connection
import connectToMongoDB from './Db/MongoDb.js';


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();


// Middlewares
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get('/',(req, res)=>{
//     res.send("hello world")
// })

app.listen(PORT ,()=>{
    connectToMongoDB();
    console.log(`server running on port: ${PORT}`)
})