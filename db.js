const mongoose = require("mongoose")

const connectToMongoDB = () => {
    mongoose.connect('mongodb+srv://code16:b9OQiqZeVtmvPc2P@amit.6gqztxs.mongodb.net/mydb')
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(error => {
            console.log("MongoDB not connected");
        })
}

module.exports = connectToMongoDB