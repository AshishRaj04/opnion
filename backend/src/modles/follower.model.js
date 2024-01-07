import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({

    follower : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

},
{
    timestamps : true
})

export const Follower = mongoose.model("Follower" , followerSchema)