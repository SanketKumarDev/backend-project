import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import

import userRouter from "./routes/user.routes.js"


//routes decleartion

app.use("/api/v1/users",userRouter)

//after /users---> all control goes to router
// EX- http://localhost:8000/api/v1/users/register (api/vi)is standered practice

export {app}