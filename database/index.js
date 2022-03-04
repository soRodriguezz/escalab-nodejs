const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("DB CONNECTED");
    } catch (err) {
        console.log("DB connection error: ", err.message);
        process.exit(1);
    }
};
    
module.exports = connectDB;
