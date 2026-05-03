let express = require("express");
const productModel = require("./models/product.model");
let app = express();

app.use(express.json())


app.post("/new-product", async (req, res) => {
    try {
        let { name, price, description, category, stock } = req.body

        let newProduct = productModel.create({
            name,
            price,
            description,
            category,
            stock

        })
        res.status(201).json({
            message: "Product Created Successfully",
            product: newProduct
        })

    } catch (error) {
        console.log("erorr in new porduct api", error);

    }
})

module.exports = app;