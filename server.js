const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const routes = require('./routes');
const authRoutes = require('./routes/authRoutes');
const goalRoutes = require('./routes/goalRoutes');
const authMiddlewares = require('./middlewares/authMiddlewares');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use('/', authRoutes);
app.use('/', authMiddlewares.requiredAuth, routes);
app.use('/', authMiddlewares.requiredAuth, goalRoutes);

app.listen(5000);