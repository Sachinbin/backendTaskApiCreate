const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        category: {
            type: String,
            enum: ["man", "woman", "kids"],
            default: "man",
        },
        stock: {
            type: Number,
            require: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);