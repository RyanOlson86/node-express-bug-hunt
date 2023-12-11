// Require express
const express = require('express');

const app = express();
// Heroku assigns us a unique PORT
// Use 5001 for localhost development
const port = process.env.PORT || 5007;
const quoteRouter = require('./routes/quote.router');

// Allow req.body
// Alternative to body parser when using Axios
app.use(express.json());

app.use('/quotes', quoteRouter);

// ??? Look here for files
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
