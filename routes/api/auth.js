const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// User Model
const User = require("../../models/User");

router.get("/", (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User Does no exist" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      res.json({
        user: {
          id: user.id,
          email: user.email
        }
      });
    });
  });
});

module.exports = router;
