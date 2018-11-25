const firebase = require('./firebase');
const { Promise } = require('bluebird');

class BuddySystem {
  constructor() {
    const settings = {
      timestampsInSnapshots: true
    };
    firebase.firestore().settings(settings);
    this.db = firebase.firestore().collection('users');
  }

  findUsers(city, state) {
    return new Promise((resolve, reject) => {
      this.db
        .where('city', '==', city)
        .where('state', '==', state)
        .get()
        .then(result => {
          const userIds = [];
          result.forEach(doc => {
            userIds.push({ ...doc.data(), id: doc.id });
          });
          resolve(userIds);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

module.exports = new BuddySystem();
