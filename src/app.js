let express = require("express");
const productModel = require("./models/product.model");
let app = express();

app.use(express.json())


app.post("/new-product", async (req, res) => {
    try {
        let { name, price, description, category, stock } = req.body

        let newProduct = await productModel.create({
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

app.get("/product", async (req, res) => {
    try {
        let products = await productModel.find();
        res.status(200).json({
            message: "Products fetched successfully",
            data: products,

        })
    } catch (error) {
        console.log(`error in get api ${error}`);

    }
})

app.put("/product/:id", async (req, res) => {
    try {
        let { id } = req.params; // ✅ correct
        let { name, price, description, category, stock } = req.body;

        let response = await productModel.findByIdAndUpdate(
            id,
            { name, price, description, category, stock },
            { new: true }
        );

        if (!response) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.status(200).json({
            message: "Updated successfully",
            data: response,
        });

    } catch (error) {
        console.log("internal server error", error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});


app.delete("/product/:id", async (req, res) => {
    try {
        let { id } = req.params;

        if (!id) {
            res.send("id is not found")
            return
        }
        let response = await productModel.findByIdAndDelete(id)
        if (!response) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        res.status(200).json({
            message: "product deleted successfully"
        })
    } catch (error) {
        console.log("internal server error", error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
})


module.exports = app;