const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

let contactList = [
        {
            name: 'sumit',
            mobile: '9584092556'
        },
        {
            name: 'piyush',
            mobile: '7974573133'
        },
        {
            name: 'Kutta',
            mobile: '1234567890'
        }
];

app.get('/', function(req, res){

    Contact.find({}, function(err, contact){
        if(err){
            console.log('error fetching in db');
            return;
        } 
        return res.render('home', {
            title: "My contact list",
            contact_list: contact
        });
    });
});

app.get('/practice', function(req, res){
      return res.render('practice', {
        title: "Let us play with Ejs"
      });
});

app.post('/create-contact', function(req, res){
    Contact.create({
        name: req.body.name,
        mobile: req.body.mobile
    }, function(err, newContact){
        if(err){
            console.log('error in creating contact');
            return;
        }

        console.log('*****', newContact);
        return res.redirect('back');

     });
});

// for string param
// app.get('/delete-contact/:phone', function(req, res){
//     let phone = req.params;
//     console.log(phone);
// });

// delete using query 
app.get('/delete-contact', function(req, res){
        let id = req.query.id;
        Contact.findByIdAndDelete(id, function(err){
            if(err){
                console.log('error in deleting the object');
                return;
            }
            return res.redirect('back');
        })
});


app.listen(port, function(err){
    if(err){
        console.log("error ", err);
        return;
    }
    console.log("Yup! My server is running on port: ", port);
});