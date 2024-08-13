const mongoose = require('mongoose')

async function ConnectDB() {
    try {
        await mongoose.connect('mongodb+srv://prathmesh:31LaZ7rVrNY5kOl0@mern-crud.ibpyshr.mongodb.net/bookapp?retryWrites=true&w=majority&appName=mern-crud');
        console.log("Connected to DataBase");
        return true;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = {ConnectDB}