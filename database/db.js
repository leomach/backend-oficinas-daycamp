const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log("Wait connecting to the database")

    mongoose.connect(
        "mongodb+srv://quartajovem:quartajo1@cluster0.q7d9olp.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("MongoDB Atlas Connected") })
        .catch(err => console.log(err));
}

module.exports = connectDatabase;