import mongoose from "mongoose";
import {loadType} from "mongoose-currency"

loadType(mongoose);
const Schema = mongoose.Schema


const TransactionSchema = new Schema(
    {
        buyer:{
            type: String,
            required :true,
        },
        amount:{
            type: mongoose.Types.Currency,
            currency: "KES",
            get: (v)=> v*10
        },
        productIds:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }],
   },
    {timestamps:true , toJSON: {getters: true}}
)

const Transaction = mongoose.model('Transaction',TransactionSchema)
export default Transaction;