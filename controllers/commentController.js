 const Post = require('../models/postModel');
 const Comment = require('../models/commentModel');

 // bussiness logic 

 exports.createComment = async (req, res) => {
    try {
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });
            //save the comment to the database
            const savedComment = await comment.save();

            //find by new comment by ID and the new comment to its comment array
            const updatedPost = await Post.findByIdAndUpdate(post, {
                $push: {comments: savedComment._id}
            }, {new: true})
                .populate('comments') // populate the comments field with the populated comments
                .exec();
        res.json({
            post: updatedPost,
        })

    } catch (error) {
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
 }