import mongoose from "mongoose";
import {loadType} from "mongoose-currency"

loadType(mongoose);
const Schema = mongoose.Schema


const ProductSchema = new Schema(
    {
        price:{
            type: mongoose.Types.Currency,
            currency: "KES",
            get: (v)=> v*10
        },
        expense:{
            type: mongoose.Types.Currency,
            currency: "KES",
            get: (v)=> v*10
               },
        transactions:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        }],
   },
    {timestamps:true , toJSON: {getters: true}}
)

const Product = mongoose.model('Product',ProductSchema)
export default Product;