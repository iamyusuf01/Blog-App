const express = require('express');
const router = express.Router();

// Importing controllers
 const {dummyLink, likePost, unLikePost} = require('../controllers/LikeController');
 const { createComment} = require('../controllers/CommentController')
 const {createPost, getAllPost} = require('../controllers/PostController')
  

 // mapping routes to controller functions
 router.get("/dummyroute", dummyLink);
 router.post("/comments/create", createComment)
 router.post("/posts/create", createPost)
 router.get("/posts", getAllPost)
 router.post("/likes/like", likePost)
 router.post("/likes/unlike", unLikePost)
 
module.exports = router;