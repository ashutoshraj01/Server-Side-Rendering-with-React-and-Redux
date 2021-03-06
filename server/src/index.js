const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./clients/components/Home').default;

app.get('/', (req, res) => {
     const content = renderToString(<Home />);

     res.send(content);
});


app.listen(3000, () => {
     console.log('listening on port 3000');
});