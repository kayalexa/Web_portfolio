const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/Achievements', (req, res) => {
    res.render('Achievements')
})

router.get('/Contact', (req, res) => {
    res.render('Contact')
})

router.get('/Education', (req, res) => {
    res.render('Education')
})

router.get('/Experience', (req, res) => {
    res.render('Experience')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact)
    .then(result =>{
        res.render('contact')
    })

    .catch(err => console.log(err));

})

module.exports = router;