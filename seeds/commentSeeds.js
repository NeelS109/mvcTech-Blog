const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        blog_id: 5,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 4,
        blog_id: 4,
        comment_text: "This is amazing"
    },
    {
        user_id: 1,
        blog_id: 4,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;