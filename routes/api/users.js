const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// User Model
const User = require("../../models/User");

router.get("/", (req, res) => {
  User.find().then(user => res.json(user));
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validaton
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      email,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          res.json({
            id: user.id,
            email: user.email
          });
        });
      });
    });
  });
});

module.exports = router;
