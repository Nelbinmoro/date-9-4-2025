var express = require ('express');//test
var dotenv = require('dotenv');
var userRoutes = require('./routes/userRoutes');
var productRoutes =require('./routes/productRoutes');
var app = express();
var port =2999;

dotenv.config();
require('./db');
app.use(express.json());
var port = process.env.port;
// cjahn

app.use('/api',userRoutes)
app.use('/app',productRoutes)
 app.listen(port,(req,res)=>{
    console.log(`server is up a running in ${port}`);
 })