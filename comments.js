// create web server
const express = require('express');
const app = express();
const port = 3000;
// create a route for the app
app.get('/', (req, res) => res.send('Hello World!'));
// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Path: index.js
