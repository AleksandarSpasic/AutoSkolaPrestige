const express = require("express");
const router = express.Router();

// Item Model
const Photo = require("../../models/Photos");

router.get("/", (req, res) => {
  Photo.find()
    .sort({ date: -1 })
    .then(photos => res.json(photos));
});

router.post("/", (req, res) => {
  const newItem = new Photo({
    photos: req.body.photos
  });
  newItem.save().then(photo => res.json(photo));
});

module.exports = router;
