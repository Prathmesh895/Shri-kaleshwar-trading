const express = require('express');
const router = express.Router();
const { Book } = require('../models/bookSchema');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');

console.log(cloudinary.config());
// Middleware to handle file uploads
router.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Configure Cloudinary (Ensure these environment variables are set)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/", async (req, res) => {
    try {
        if (!req.files || !req.files.b_image) {
            return res.status(400).json({ message: 'No image file uploaded' });
        }

        const uploadImage = async (imagePath) => {
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
            };

            try {
                const result = await cloudinary.uploader.upload(imagePath, options);
                console.log(result);
                return result.secure_url;  // Return the URL of the uploaded image
            } catch (error) {
                console.error('Error uploading to Cloudinary:', error);
                throw error;
            }
        };

        // Upload the image file to Cloudinary
        const imageFile = req.files.b_image;
        const imageUrl = await uploadImage(imageFile.tempFilePath);

        // Create a new book with the title and image URL
        const newBook = {
            b_title: req.body.b_title,
            b_image: imageUrl  // Save the image URL returned by Cloudinary
        };

        await Book.create(newBook);
        res.status(201).json({ message: 'File uploaded and book created successfully' });
    } catch (error) {
        console.error('Error processing request:', error.message);
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error.message);
        res.status(500).json({ message: 'Failed to fetch books' });
    }
});
module.exports = router;
