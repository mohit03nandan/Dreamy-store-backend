const express = require("express");
const mongoose = require("mongoose");
const { Router } = require("express");
const schema = require("../models/schema");
const { restart } = require("nodemon");
const route = Router();



var products = schema.product;

route.post("/", async (req, res, next) => {

    const productcollection = new products({
      name: 'STAN FORMAL SHOES',
      desc: 'shoes have a soft, comfortable lining and a durable rubber sole that provides excellent traction on a variety of surfaces. They also feature the Adidas three-stripe design on the sides, along with the Adidas logo on the tongue and heel.',
      imgUrls: 'https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-master-catalog/default/dwc6612fac/images/large/8313889_1.jpeg?sw=817',
      customerRevs: 500,
      stars: 4.8,
      available: 'In stock',
      sku: 'SH-008',
      category: 'Dress Shoe',
      company: 'Bata',
      colors: 'Orange',
      price: 200,
      freeShipping: 0,
             
      });
      productcollection.save();
      res.send({message:"folder created successfully",Response:"ok"})
    res.send("productssss")

});


route.get("/getproduct", async (req, res, next) => {
try {
  const GetProductsResult = await products.find();
  if(!GetProductsResult) {
    res.status(404).send({ error: 'Products not found' });
  }else{
    res.send(GetProductsResult)
  }
} catch (error) {
  res.status(500).send({ error: 'An error occurred' });
}
});

route.get("/getproductLowest", async (req, res, next) => {
  try {
    const GetProductsResult = await products.find().sort({price: 1});
    if(!GetProductsResult) {
      res.status(404).send({ error: 'Products not found' });
    }else{
      res.send(GetProductsResult)
    }
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
  });

  route.get("/getproductHeighest", async (req, res, next) => {
    try {
      const GetProductsResult = await products.find().sort({price: -1});
      if(!GetProductsResult) {
        res.status(404).send({ error: 'Products not found' });
      }else{
        res.send(GetProductsResult)
      }
    } catch (error) {
      res.status(500).send({ error: 'An error occurred' });
    }
    });
  




module.exports = route;
