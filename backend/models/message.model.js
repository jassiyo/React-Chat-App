import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
   senderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    require:true,
   },
   receiverId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    require:true,
   },
   message:{
    type:String,
    require:true,   

   }
//    createdAt, updatedAt
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema)

export default Message;