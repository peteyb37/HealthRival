const firebase = require('./firebase');
const {
  Promise
} = require('bluebird');

class Authentication {
  currentUser() {
    return firebase.auth().currentUser;
  }

  signin(email, password) {
    return new Promise((resolve, reject) => {
      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => resolve()).catch(error => reject(error));
    });
  }

  signUp(email, password, password2) {
    return new Promise((resolve, reject) => {
      if (password !== password2) {
        reject(new Error('Password does not match'));
      }
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }
}

module.exports = new Authentication();