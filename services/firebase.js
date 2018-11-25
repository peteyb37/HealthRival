const firebase = require('firebase');

const keys = require('../config');

const config = {
  apiKey: keys.firebaseApiKey,
  authDomain: keys.firebaseAuthDomain,
  databaseURL: keys.firebaseDataBaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId
};
firebase.initializeApp(config);

module.exports = firebase;
