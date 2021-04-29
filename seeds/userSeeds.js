const { User } = require('../models');

const userData = [
    {
        username: "daveD",
        email: "dave@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "neelS",
        email: "neel@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "trisha",
        email: "trisha@gmail.com",
        password: "password3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;