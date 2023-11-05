import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import Reservation from "./models/ReservationModel.js";



const app = express();
dotenv.config();

try {
    await db.authenticate();
    await Reservation.sync();
    console.log('Database Connected');
} catch (error) {
    console.error(error);
}

app.use(cors({
    credentials: true,  origin: ['http://localhost:5173', 'http://localhost:5001'],
}));
app.use(cookieParser())

app.use(bodyParser.json());

app.use(express.json())

app.use(router);

app.listen(5001, ()=> console.log('server running at port 5001'));
