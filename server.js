require("dotenv").config();
let app = require("./src/app")
let connectDB = require("./src/config/db")

connectDB()
app.listen(process.env.PORT,()=>{
    console.log("server is running at port 3000");
    
})

// console.log(productModel);


