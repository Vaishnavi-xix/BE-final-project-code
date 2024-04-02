import { Schema,model } from "mongoose";

const createproductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    productImg: {
        type: String, 

    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,     
        default: "-"
    },
    quantity:{
        type:String,
        default:"1"
    }

}, { timestamps: true })

const CreateProduct = model('CreateProduct', createproductSchema)

export default CreateProduct;