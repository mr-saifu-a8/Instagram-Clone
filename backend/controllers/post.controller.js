const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require('../models/like.model')

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

const postCreating = async (req, res) => {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "insta-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });

  res.send(file);
};

const getPostController = async (req, res) => {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({ message: "Posts fetched successfully", posts });
};

const getPostDetails = async (req, res) => {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({ message: "Forbidden Content" });
  }

  return res.status(200).json({
    message: "Post fetch successfully",
    post,
  });
};

const likePost = async (req, res) => {
  const username = req.user.username
  const postId = req.params.postId

  const post = await postModel.findById(postId)

  if (!post) {
    return res.status(404).json({message: "Post not found"})
  }

  const like = likeModel.create({
    post: postId,
    user: username
  })

  res.status(200).json({
    message: "Post like successfully",
    like
  })
}

const getFeedController = async (req, res) => {
  const posts = await postModel.find().populate("user")

  res.status(200).json({message: "Posts fetch successfully", posts})
}

module.exports = { postCreating, getPostController, getPostDetails, likePost, getFeedController };
