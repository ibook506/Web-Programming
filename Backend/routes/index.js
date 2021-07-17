const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const nodemailer = require('nodemailer');
const Reservation = require('../models/PostData');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

/* router.get('/admin', ensureAuthenticated, (req, res) =>
  res.render('admin', {
    reservations.find({}).toArray((err, data) => {
      if (err) throw err;
      console.log(data);
    })
  })
); */




// Booking Appointment
router.post('/send', ensureAuthenticated, (req, res) => {

  const { name, email, phone, numberOfCustomers, date, time, message } = req.body;
  let errors = [];

  if (!name || !email || !phone || !numberOfCustomers || !date || !time || !message) {
    errors.push({ msg: 'Please enter all fields' });
  }
  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      phone,
      numberOfCustomers,
      date,
      time,
      message
    });
  } else {
        const newReservation = new Reservation({
          name,
          email,
          phone,
          numberOfCustomers,
          date,
          time,
          message
        })
        newReservation
        .save()
        .then(() => {
          /* req.flash(
            'success_msg',
            'You are now registered and can log in'
        ) */
        console.log('reservation submitted successfull');
        res.redirect('/dashboard');
          })
          }

  
});

module.exports = router;
