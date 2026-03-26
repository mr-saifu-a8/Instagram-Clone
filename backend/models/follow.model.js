const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
      required: true,
    },
    followee: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const followModel = mongoose.model("follows", followSchema);
module.exports = followModel;
