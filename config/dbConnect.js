const mongoose = require("mongoose")
require('dotenv').config('../.env')

const dbConnect = () => {
    mongoose
        .connect(`mongodb://localhost:27017/test-user`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((con) => {
            console.log(`DB connect on HOST : ${con.connection.host}`);
        })
};

module.exports = dbConnect;
