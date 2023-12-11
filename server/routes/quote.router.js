const express = require('express');
const router = express.Router();

// ??? List of quotes
// TypeError: quotesFromServer is not iterable at client.js:20:26
// should be an array of objects
let quoteList = [];

// ??? GET request returns information
//  GET http://localhost:5007/quotes 404 (Not Found)
//  changed '/quotes' to '/'
router.get('/', (req, res) => {
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
    // POST http://localhost:5007/quotes 500 (Internal Server Error)
    // ReferenceError: quotesList is not defined
    // changed quotesList to quoteList
    quoteList.push(quoteToAdd);
    res.sendStatus(201);
});

// PUT request update information

// ???
// missing module.exports = router
module.exports = router