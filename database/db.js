const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log("Wait connecting to the database")
    const dbcn = process.env.MONGO
    if (!dbcn) {
        throw new Error
    }

    mongoose.connect(
        dbcn, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("MongoDB Atlas Connected") })
        .catch(err => console.log(err));
}

module.exports = connectDatabase;