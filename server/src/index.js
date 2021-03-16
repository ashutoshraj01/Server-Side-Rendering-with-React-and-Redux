const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

app.get('/', (req, res) => {

});


app.listen(3000, () => {
     console.log('listening on port 3000');
});