import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import config from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from './routes/orderRoute.js';

import bodyparser from "body-parser";
import path from 'path';
import cors from "cors";


const port = process.env.PORT || 8002;

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error=>console.log(error.reason))
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

app.listen(port,()=>{
    console.log(`Connection set up at ${port}`);
})