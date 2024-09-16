import CreateModel from "../models/User.models.js"
//import mongoose from "mongoose"

//const DB_USER= "gcespedeslnx";
//const  DB_PASSWORD ="xTfYlucUVCU2hitv";
//const DB_HOST = "gcespedes.qz5ad.mongodb.net";
//const DB_NAME = "retoVite";
//const API_BACKEND=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
const API_BACKEND=`http://localhost:5173`

export default async function userDevto(data){
    const newUser = CreateModel()
    console.log(data)
    let response = await fetch(`${API_BACKEND}/login/${data}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }).then(async ()=>{
        const result= await response.json()
        newUser.create(result)
        console.log(result)
    })
    

    return newUser;
}
    




 //const res = userDevto({ email: "gcespedeslnx@yahoo.com", password: "dasa" });

//console.log(res)