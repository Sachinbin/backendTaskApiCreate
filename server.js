require("dotenv").config();
let app = require("./src/app")
let productModel = require("./src/models/product.model")
let connectDB = require("./src/config/db")

connectDB()
app.listen(process.env.PORT,()=>{
    console.log("server is running at port 3000");
    
})

// console.log(productModel);


