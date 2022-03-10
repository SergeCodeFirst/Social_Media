const cloudinary = require('cloudinary').v2;

// Cloudinary Configuring 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_COULD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = cloudinary;