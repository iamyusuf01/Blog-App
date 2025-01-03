const { json } = require('express');
const Post = require('../models/postModel')

exports.createPost = async (req, res) => {
    try {
        const {title, body} = req.body;
        const post = new post({
            title,
            body
        })
        const savedPost = await post.save();
        
        res,json({
            post: savedPost,
        });

    } catch (error) {
        return res.status(400).json({
                error: "Error while creating post",
        })
    }

}

exports.getAllPost = async (req, res) => {
        try {
            const posts = await Post.find().populate("likes").populate("comment").exec();
             res.json({
                posts,
            });
        } catch (error) {
            return res.status(400).json({
                error: "Error while getting all posts",
            })
        }
}