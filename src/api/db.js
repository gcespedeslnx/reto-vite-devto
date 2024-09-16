//const mongoose = require("mongoose")

import mongoose from "mongoose";

const DB_USER= "gcespedeslnx";
const  DB_PASSWORD ="xTfYlucUVCU2hitv";
const DB_HOST = "gcespedes.qz5ad.mongodb.net";
const DB_NAME = "retoVite";
const url =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

export default function Connect() {
    return mongoose.connect(url);
    
}


