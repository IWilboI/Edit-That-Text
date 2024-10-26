const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from the dist folder after Webpack builds
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./server/routes/htmlRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
