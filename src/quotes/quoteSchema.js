'use strict';

const mongoose = require('mongoose');


const quoteSchema = mongoose.Schema({
  user_id: {type:String, required: true, unique:true },
  content: { type: String, required: true },
  type: {type: String, required: true },

});




module.exports = mongoose.model('quoteSchema', quoteSchema);
