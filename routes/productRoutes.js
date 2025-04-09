var express = require('express');
var router = express.Router();
var productModel = require('../model/product');

router.post('/',(req,res)=>{
    try{
        productModel(req.body).save();
        res.send("product added");
    
    }catch(error){
        res.send(error)
    }
})

router.get('/get',async(req,res)=>{
    try{
        var data = await productModel.find();
        res.send(data)
    } catch (error){
        res.send(error)
    }
})

router.get('/get/:id',async(req,res)=>{
    try{
        var data = await productModel.findById(req.params.id);
        res.send(data)
    } catch (error){
        res.send(error)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await productModel.findByIdAndDelete(req.params.id);
        res.send("Data Deleted")
        // res.send(id)
    }catch (error){
        res.send(error)
    }
})

router.put('/update/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("data updated")
        // res.send(id)
    }catch (error){
        res.send(error)
    }
})




module.exports = router