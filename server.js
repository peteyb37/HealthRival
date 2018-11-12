const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

routes(app);

app.listen(5000);