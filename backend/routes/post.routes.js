const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require('../middlewares/auth.middleware.js')

postRouter.post("/", upload.single("image"), identifyUser, postController.postCreating);
postRouter.get("/",identifyUser, postController.getPostController);
postRouter.get("/details/:postId", identifyUser, postController.getPostDetails);

module.exports = postRouter;
