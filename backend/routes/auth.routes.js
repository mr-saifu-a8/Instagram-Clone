const express = require("express");
const authRouter = express.Router();
const userModle = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { email, password, username, bio, profileImage } = req.body;

  const isUserAlreadyExists = await userModle.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "User already exists - " +
        (isUserAlreadyExists.email == email
          ? "Email already exists"
          : "Username already exists"),
    });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModle.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });

  /*
   * - user ka data hona chahiye
   * - data unique hona chahiye
   */
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User regestered successfully",
    user: user.username,
    emit: user.email,
    bio: user.bio,
    profileImage: user.profileImage,
  });
});

authRouter.post("/login", async (req, res) => {
  const { username, password, email } = req.body;

  const user = await userModle.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordValid = hash == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Password invalid" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(200).json({
    message: "User loggedIn successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
});

module.exports = authRouter;
