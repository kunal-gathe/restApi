const { query } = require("express");
const Product = require("../models/product");

const getProducts = async (req, res) => {
  const { company, name } = req.query;
  const queryObject= {};

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  console.log(queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({ products });
};
const getProductsTesting = async (req, res) => {
  const mydata = await Product.find(req.query);
  res.status(200).json(mydata);
};
module.exports = { getProducts, getProductsTesting };
