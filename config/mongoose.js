// require the library
const mongoose = require('mongoose');

// connect to the db
mongoose.connect('mongodb://localhost/contact_list_db');

// get the connection to check it
const db = mongoose.connection;

// on error 
db.on('err', console.error.bind(console, "error connecting to to database"));

// up and connected successfully
db.once('open', function(){
    console.log("Successfully connected to db");
});

