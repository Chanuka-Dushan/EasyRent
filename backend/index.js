import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from 'cookie-parser'

import BookingRoute from './routes/Booking And Payment Management/bookingRoute.js'
import { RenterRouter } from './routes/Renter Management/Renter.route.js';

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.get('/',(request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to ITP Project')
})

app.use('/api/booking', BookingRoute);
app.use('/auth', RenterRouter);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to the database')
        app.listen(PORT,() =>{
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
