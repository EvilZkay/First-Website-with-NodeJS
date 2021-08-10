const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Middlewares

// Routes
app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Listening to the server
app.listen(app.get('port'), () => {
    console.log('Listening to port ', app.get('port'));
});