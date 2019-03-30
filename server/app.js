const express = require('express');
const db = require('../db');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/books/:id', express.static(__dirname + '/../client/dist'))

// get and post routes to interact with database here

// get all reviews
app.get('/books/:id/reviews', (req, res) => {
  const id = req.params.id;
  db.getReviews(id);
})

// get reviews w/ specific rating
app.get('books/:id/reviews/:rating', (req, res) => {
  const id = req.params.id;
  const rating = req.params.rating;
  db.getRatedReviews(id, rating);
})

// post review
app.post('books/:id/reviews', (req, res) => {
  const id = req.params.id;
  // grab review text
  // grab review rating
  db.postReview(id, review, rating)
})


module.exports = app;