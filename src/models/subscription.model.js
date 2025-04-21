import mongoose, {Schema} from "mongoose"
import { User } from "./user.model"

const subscriptionSchema = new Schema({
    subscriber:{
        type : Schema.Type.ObjectId, //one whom is subscribing
        ref:User
    },
    channel:{
        type : Schema.Type.ObjectId, //one to whom 'subscriber'is subscribing
        ref : "User"
    }
},{timestamps:true})



export const Subscription = mongoose.model("Subscription",subscriptionSchema)


