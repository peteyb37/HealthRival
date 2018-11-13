const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const routes = require('./routes');
const authRoutes = require('./routes/authRoutes');
const firebase = require('firebase');
const authMiddlewares = require('./middlewares/authMiddlewares');

const config = {
  apiKey: "AIzaSyAJN1R7Hnb-O5TCgIFhS0oeUGAi-o4Z-f8",
  authDomain: "health-rival.firebaseapp.com",
  databaseURL: "https://health-rival.firebaseio.com",
  projectId: "health-rival",
  storageBucket: "health-rival.appspot.com",
  messagingSenderId: "487114544631"
};
firebase.initializeApp(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use('/', authRoutes);
app.use('/', authMiddlewares.requiredAuth, routes);

app.listen(5000);