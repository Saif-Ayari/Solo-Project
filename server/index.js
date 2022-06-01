import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';


import routes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors()) ;

app.use('/posts', routes) 

const connection_url = 'mongodb+srv://saif:123@cluster0.dhqnr.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`server running on port : ${PORT} `))).catch((err) => console.log(err));



