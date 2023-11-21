import mongoose from "mongoose";
import {loadType} from "mongoose-currency"

loadType(mongoose);
const Schema = mongoose.Schema


const UserSchema = new Schema(
    {
        firstName:{
            type: String,
            required :true,
        },
        lastName:{
            type: String,
            required :true,
        },
        email:{
            type: String,
            required :true,
        },
        password:{
            type: String,
            required :true,
        },
   },
    {timestamps:true , toJSON: {getters: true}}
)

const User = mongoose.model('User',UserSchema)
export default User;