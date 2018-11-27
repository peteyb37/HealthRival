const firebase = require('./firebase');
const { Promise } = require('bluebird');

class Authentication {
  constructor() {
    this.db = firebase.firestore().collection('users');
  }

  currentUser() {
    return firebase.auth().currentUser;
  }

  signin(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.NONE)
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => resolve(result.user))
            .catch(error => reject(error));
        });
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }

  signUp(email, password, password2) {
    return new Promise((resolve, reject) => {
      if (password !== password2) {
        reject(new Error('Password does not match'));
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  }

  updateUser(values, userId) {
    return new Promise((resolve, reject) => {
      this.db
        .doc(userId)
        .update(values)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getUser(userId) {
    return new Promise((resolve, reject) => {
      this.db
        .doc(userId)
        .get()
        .then(doc => {
          resolve(doc.data());
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

module.exports = new Authentication();
