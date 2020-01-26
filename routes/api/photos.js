const express = require("express");
const router = express.Router();

// Item Model
const Photo = require("../../models/Photos");

router.get("/", async (req, res) => {
  const photo = await Photo.find().sort({ date: -1 });
  res.send(photo);
});

router.post("/", async (req, res) => {
  let newPhoto = new Photo({
    photos: req.body.photos
  });

  newPhoto = await newPhoto.save();
  res.send(newPhoto);
});

router.put("/:id", async (req, res) => {
  const photos = await Photo.findByIdAndUpdate(
    req.params.id,
    { photos: req.body.photos },
    { new: true }
  );
  if (!photos) return res.status(404).send("This photos doesn't exist.");
  res.send(photos);
});

router.delete("/:id", async (req, res) => {
  const photos = await Photo.findByIdAndRemove(req.params.id);
  if (!photos) return res.status(404).send("This photos doesn't exist.");
  res.send(photos);
});

module.exports = router;
