const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    b_title: {
        type: String,
        required: true
    },
    b_image: {  
        type: String,
        required: true  
    }
}, {
    timestamps: true  
});

const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
