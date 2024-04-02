import { Schema, model } from "mongoose";

const consumerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    consumerproductimg:{
        type:String,
        required:true
    },
    consumerproductprice:{
        type:String,
        required:true
    },
    consumerproductquantity:{
        type:String,
        required:true
    },
    consumerproductDescription:{
        type:String,
        required:true
    }
})

const Consumerproduct = model("Consumerproduct", consumerSchema)

export default Consumerproduct;