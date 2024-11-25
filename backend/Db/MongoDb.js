import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.mongo_db_url);
        console.log('Connected to MongoDb')
    } catch (error) {
        console.log("error connecting to mongodb", error.message)
    }
}

export default connectToMongoDB;