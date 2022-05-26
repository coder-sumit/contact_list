// require the library
const mongoose = require('mongoose');

// create schema
const contactSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

// create collection name
const Contact = mongoose.model('contact', contactSchema);
module.exports = Contact;