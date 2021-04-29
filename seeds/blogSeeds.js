const { Blog } = require('../models');

const blogData = [
    {
        title: "Stratolaunch, the gargantuan airplane, finally takes flight a second time",
        blog_content: "The world's largest airplane by wingspan took to the skies once again on Thursday.",
        user_id: 3
    },
    {
        title: "Twitter's user growth lower than expected despite tackling misinformation",
        blog_content: "The social media site has been exploring new ways to combat fake news and online abuse.",
        user_id: 1
    },
    {
        title: "Mars Ingenuity helicopter's fourth flight doesn't get off ground... yet",
        blog_content: "The history-making Ingenuity was scheduled to take off again on Thursday, but it will have to wait and try again.",
        user_id: 2

    },
]

const blogSeeds = () => Blog.bulkCreate(blogData);

module.exports = blogSeeds;