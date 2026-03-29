const userModle = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
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

  const hash = await bcrypt.hash(password, 10);

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
      username: user.username
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
}

async function loginController(req, res) {
  const { username, password, email } = req.body;

  const user = await userModle.findOne({
    $or: [{ email }, { username }],
  }).select("+password")

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Password invalid" });
  }

  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
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
}

async function getMeController(req, res) {
  const userId = req.user.id
  const user = await userModle.findById(userId)

  res.status(200).json({
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage
    }
  })
}

module.exports = { registerController, loginController, getMeController };
