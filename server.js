const pug = require('pug');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set views path
app.set('views', path.join(__dirname, 'views'));
// Set public path
app.use(express.static(path.join(__dirname, 'public')));
// Set pug as view engine
app.set('view engine', 'pug');

// Player's index
app.get('/', (req, res) => {
    res.render('index');
});
// Start server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
