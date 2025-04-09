var mongoose =require('mongoose');
var userSchema = mongoose.Schema({
    pName:String,
    pQuantity:String,
    pPrice:Number,
    pBrand:String   
})
 var productModel = mongoose.model("product",userSchema);
 module.exports = productModel;