import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32
    },
    images: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: false
    },
    quantity: {
        type: Number,
        default:1
    }
    // sold:{
    //     type: Number,
    //     default: 0
    // }
}, { timestamps: true })
module.exports = mongoose.model("Product", productSchema)