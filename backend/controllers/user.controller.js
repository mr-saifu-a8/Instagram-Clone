const followModel = require('../models/follow.model')


const followUser = async (req, res) => {
  const followerUserName = req.user.username;
  const followeeUserName = req.params.username

  const followRecord = await followModel.create({
    follower: followerUserName,
    followee: followeeUserName
  })

  res.status(201).json({
    message: `You are now following ${followeeUserName}`,
    follow: followRecord
  })
}

module.exports = {followUser}