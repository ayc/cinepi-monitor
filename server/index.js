const express = require('express');
const path = require('path');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 8081;

// TODO: set up websocket to listen for events..

// first access is to the api endpoints
app.use('/api', router);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));
// everything else gets served the react app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
