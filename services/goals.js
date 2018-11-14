const firebase = require('./firebase');
const {
  Promise
} = require('bluebird');

class Goal {
  constructor() {
    const settings = {
      timestampsInSnapshots: true
    };
    firebase.firestore().settings(settings);
    this.db = firebase.firestore().collection('goals');
  }

  getGoals(userId) {
    return new Promise((resolve, reject) => {
      this.db.where('userId', '==', userId).get().then(result => {
        const goals = [];
        result.forEach(doc => {
          goals.push({ ...doc.data(),
            id: doc.id
          });
        });
        resolve(goals.sort((obj1, obj2) => {
          return obj1.index - obj2.index
        }));
      }).catch(error => {
        reject(error);
      });
    })
  }

  addNewGoal(userId, title, index) {
    return new Promise((resolve, reject) => {
      this.db.add({
        title,
        done: false,
        userId,
        index
      }).then((result) => {
        resolve({
          id: result.id,
          title,
          done: false,
          index
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  deleteGoal(goalId) {
    return new Promise((resolve, reject) => {
      this.db.doc(goalId).delete().then(() => {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  updateGoal(goalId, values) {
    return new Promise((resolve, reject) => {
      this.db.doc(goalId).update(values).then(() => {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
}

module.exports = new Goal();