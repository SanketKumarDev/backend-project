import mongoose, {Schema} from "mongoose"
import { User } from "./user.model.js"

const subscriptionSchema = new Schema({
    subscriber:{
        type : Schema.Types.ObjectId, //one whom is subscribing
        ref:User
    },
    channel:{
        type : Schema.Types.ObjectId, //one to whom 'subscriber'is subscribing
        ref : "User"
    }
},{timestamps:true})



export const Subscription = mongoose.model("Subscription",subscriptionSchema)


