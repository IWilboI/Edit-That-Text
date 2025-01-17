const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));


require('./routes/htmlRoutes')(app);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html', 'index.html'));
  });

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
