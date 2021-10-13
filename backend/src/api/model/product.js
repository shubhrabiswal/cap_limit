const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  HSN: {
    type: String,
    unique:true,
    trim:true
  },
  description: {
    type: String,
    trim:true
  },
  price:{
    type:Number
  },
  RODTEP:{
    type: Number,
  },
  UQC:{
    type: String
  },
  capPerKg:{
    type: Number
  },
});


module.exports = mongoose.model('Product', ProductSchema);