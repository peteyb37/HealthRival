const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');

const app = express();

const keys = require('./config');
const routes = require('./routes');
const authRoutes = require('./routes/authRoutes');
const goalRoutes = require('./routes/goalRoutes');
const buddyRoutes = require('./routes/buddyRoutes');
const authMiddlewares = require('./middlewares/authMiddlewares');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false }
  })
);
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use('/', authRoutes);
app.use('/', authMiddlewares.requiredAuth, routes);
app.use('/api', authMiddlewares.requiredAuth, goalRoutes);
app.use('/api', authMiddlewares.requiredAuth, buddyRoutes);

app.listen(process.env.PORT || 5000);
