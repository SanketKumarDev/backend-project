import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middlewere.js"


const router = Router()

router.route("/register").post(
    upload.fields([{
        name:"avatar",
        maxCount: 1            //upload is a middlewere
    },
    {
        name:"coverImage",
        maxCount: 1
    }
]),

registerUser)

export default router