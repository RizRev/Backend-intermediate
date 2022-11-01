// express

const express = require('express')
var xss = require('xss-clean')
const { response } = require("./src/middleware/common");
const helmet = require('helmet')
const cors = require("cors")
require("dotenv").config();
var bodyParser = require('body-parser')
const morgan = require("morgan")
const app = express()

// xss-clean

app.use(xss())
app.listen(8080)



const order = require('./src/routes/order')
const products = require('./src/routes/products')
const category = require('./src/routes/category')


// morgan

app.use(morgan("dev"))

// bodyParser

app.use(bodyParser.json())

// cors

app.use(cors())

// helmet

app.use(helmet())

// response

// app.all("*",(req,res,next) => {
//   response(res,404,false,null,"404 Not Found")
// })

// environtment

console.log(process.env.DB_PASS)

app.get("/", (req, res, next) => {
  res.status(200).json({ status: "success", statusCode: 200 });
});

// insert image
// app.use("/", mainRouter)
// app.use("/img", express.static('./tmp'))
 

app.use('/order',order)
app.use('/category',category)
app.use('/products',products)

const port = 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
