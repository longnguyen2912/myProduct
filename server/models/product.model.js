const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema({
    title: { type: String, 
        required: [true, "title is required"],
        minLength: [3, "title must be at least 3 characters long"]
    },
    price: { type: Number, 
        required: [true, "price is required"],
        minLength: [1, "a dollar amount is required"]

    },
    description: { type: String, 
        required: [true, "a description is required for this field"],
        minLength: [10, "this field requires a minimun of 10 characters"]
    }
}, {timestamps: true})

const ProductManagerFromModel = mongoose.model('ProductManager', ProductManagerSchema)
module.exports = ProductManagerFromModel