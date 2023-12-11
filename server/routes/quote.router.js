const express = require('express');
const router = express.Router();

// ??? List of quotes
let quoteList = {};

// ??? GET request returns information
router.get('/quotes', (req, res) => {
    console.log('GET Request made for /quotes');
    // Send back the list of quotes!
    res.send(quoteList);
});

// ??? POST request save user input
router.post('/', (req, res) => {
    console.log('POST Request made for /quotes');
    // Any data we send from the client is available
    // as a property of req.body.
    console.log(req.body);
    let quoteToAdd = req.body;
    quotesList.push(quoteToAdd);
    res.sendStatus(201);
});

// PUT request update information

// ???