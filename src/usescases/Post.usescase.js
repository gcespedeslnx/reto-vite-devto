import createPost from "../models/Post.models.js";
import mongoose from "mongoose"
const DB_USER= "gcespedeslnx";
const  DB_PASSWORD ="xTfYlucUVCU2hitv";
const DB_HOST = "gcespedes.qz5ad.mongodb.net";
const DB_NAME = "retoVite";
const url =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

export default async function createPublish(data) {
    
    try {
        mongoose
        .connect(url)
        .then(async ()=>{
            const alta = createPost()
            const newUser = await alta.create(data)
            return  newUser})
        
    } catch (error) {
        console.log(error)
    } 
    
}
    


const res = createPublish({title:"Esto es una prueba",content:"Esto es una prueba",author:"gcespedes" });

console.log(res)