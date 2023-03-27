const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
    },
    title: { 
        type: String
    },
    ingredients:[{type : String}],
    instructions:{
        type : String
    }
  },
  {collection: 'recipes'});
  
  module.exports = mongoose.model("recipe", recipeSchema);