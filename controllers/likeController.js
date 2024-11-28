const Post = require('../models/postModel');
const Like = require('../models/likeModel');

//like a post

exports.likePost = async (req, res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post,
            user
        });
        const savedLike = await like.save();

        //update the post with the new like
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
        .populate("likes").exec();

        res.json({
            message: 'Post liked successfully',
            post: updatedPost
        });
    } catch (error) {
        return res.status(400).json({
            error: "Error while liking all posts",
        })   
    }
}

exports.unLikePost = async (req, res) => {
    try {
        const {post, like} = req.body;
        //find and delete the like collection me se 
        const deletedLike = await Like.findByIdAndUpdate({post:post, _id:like});

        //update the post with the deleted like
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})
       
        res.json({
            message: 'Post unliked successfully',
            post: updatedPost
        });

    } catch (error) {
        return res.status(400).json({
            error: "Error while unliking all posts",
        }) 
    }
}



exports.dummyLink = (req, res) => {
    res.send('This is a dummy link');
}