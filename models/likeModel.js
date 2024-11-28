//Import mongoose
const mongoose = require('mongoose');

//route handlers

const likeSchema = new mongoose.Schema({
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post' // link to the Post model
    },
    user: {
        type:String,
        required: true
    },
});

module.exports = mongoose.model('Like', likeSchema);