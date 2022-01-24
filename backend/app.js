// MONGODB PW: 5weiHZClIjQ4dYAh
// mongodb+srv://steveg89:<password>@cluster0.nd2qh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const path = require('path');

const app = express();

// Connection with the database
mongoose.connect('mongodb+srv://steveg89:5weiHZClIjQ4dYAh@cluster0.nd2qh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log('Successfully connected to MongoDB Atlas!');
})
.catch((error) => {
  console.log('Unable to connect to MongoDB Atlas!');
  console.error(error);
});


// CORS
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
next();
});

// Parse the body of the reqs in json
app.use(bodyParser.json());
app.use(express.json());


// Routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;