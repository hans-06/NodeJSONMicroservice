const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect(process.env.DB, {
        useUnifiedTopology: true
    }).then((res) => {
        console.log("connected successfully");
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = connection;