const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

const followUser = async (req, res) => {
  const followerUserName = req.user.username;
  const followeeUserName = req.params.username;

  const isFollowExists = await userModel.findOne({
    username: followeeUserName,
  });

  if (!isFollowExists) {
    return res.status(404).json({
      message: "User you are trying to follow doesn't exits",
    });
  }

  if (followeeUserName === followerUserName) {
    return res.status(400).json({
      message: "You can't follow Yourself",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUserName,
    followee: followeeUserName,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `You are already following ${followeeUserName}`,
      follow: isAlreadyFollowing,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUserName,
    followee: followeeUserName,
  });

  res.status(201).json({
    message: `You are now following ${followeeUserName}`,
    follow: followRecord,
  });
};

module.exports = { followUser };
