//Import mongoose
const mongoose = require('mongoose');

//route handlers
const commentSchema = new mongoose.Schema({
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post' // link to the Post model
    },
    user: {
        type:String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

//export the Comment model

module.exports = mongoose.model('Comment', commentSchema);
