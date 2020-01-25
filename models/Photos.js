const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PhotosSchema = new Schema({
  photos: {
    type: Array
  }
});

module.exports = Photo = mongoose.model("photo", PhotosSchema);
