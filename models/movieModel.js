const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
    id:{
        type: String,
        required: [true,"please add the id"],
    },
    name:{
        type: String,
        required: [true,"please add the movie name"],
    },
    Genre:{
        type: String,
        required: [true,"please add the genre of movie"],
    },
    Release_yr:{
        type: String,
        required: [true,"please add the contact phone number"],
    },
    Director:{
        type: String,
        required: [true,"please add the director's name"],
    }
});
module.exports=mongoose.model("Movie",movieSchema);