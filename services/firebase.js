const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyAJN1R7Hnb-O5TCgIFhS0oeUGAi-o4Z-f8",
  authDomain: "health-rival.firebaseapp.com",
  databaseURL: "https://health-rival.firebaseio.com",
  projectId: "health-rival",
  storageBucket: "health-rival.appspot.com",
  messagingSenderId: "487114544631"
};
firebase.initializeApp(config);

module.exports = firebase;