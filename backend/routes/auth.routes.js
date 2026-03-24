const express = require("express");
const authRouter = express.Router();
const userModle = require("../models/user.model");
const crypto = require("crypto");

authRouter.post("/register", async () => {
  const { email, password, username, bio, profileImage } = req.body;
  const isUserAlreadyExists = await userModle.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return req.status(409).json({
      message:
        "User already exists" +
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


  res.cookie("token", token)
});
