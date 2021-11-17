
import mongoose from 'mongoose';
const Cart = new mongoose.Schema({
    prodcutCart:{
        type: Array,
        ref: "Product",
        required: false
    },
    totalPrice:{
        type: Number
    },
    coupon:{
        type: String,
        required: false
    }
},{timestamps: true})
module.exports = mongoose.model("Cart", Cart)