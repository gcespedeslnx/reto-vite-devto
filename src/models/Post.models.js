import mongoose from "mongoose";

export default function createPost() {
const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        minlength:2,
        maxlength:50,
    },
    content: {
        type: String,
        required: true,
    },
     author: {
        type: String,
        required: true,
    },
    createAt:{
        type:Date,
        default:Date(),
    }
})

 return mongoose.model("postDevto", userSchema)
}
