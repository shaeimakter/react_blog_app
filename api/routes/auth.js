const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (request, response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(request.body.password, salt);
    const newUser = new User({
      username: request.body.username,
      email: request.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    response.status(200).json(user);
  } catch (err) {
    response.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ username: request.body.username });
    !user && response.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(
      request.body.password,
      user.password
    );
    !validated && response.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    response.status(200).json(others);
  } catch (err) {
    response.status(500).json(err);
  }
});

module.exports = router;
