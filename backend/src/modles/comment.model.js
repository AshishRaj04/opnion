import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required: true,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    tweet : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Tweet",
    }
},
{
    timestamps : true
})

export const Comment = mongoose.model("Comment" , commentSchema)