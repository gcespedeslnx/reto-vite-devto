import mongoose from "mongoose";

export default function CreateModel() {
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        minlength:2,
        maxlength:50,
    },
    email: {
        type: String,
        required: true,
        //match:RegExp("/.@.\..*/"),
    },
    password: {
        type: String,
        required: true,
    },
    createAt:{
        type:Date,
        default:Date(),
    }
})

 return mongoose.model("userDevto", userSchema)
}
