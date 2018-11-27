const authetication = require('../services/authentication');
const firebase = require('../services/firebase');

const getSignIn = (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }

  if (req.route.methods.get) {
    res.render('pages/signin');
  } else {
    const { email, password } = req.body;
    authetication
      .signin(email, password)
      .then(user => {
        req.session.userId = user.uid;
        res.redirect('/');
      })
      .catch(error => {
        res.render('pages/signin', {
          error
        });
      });
  }
};

const getSignUp = (req, res) => {
  const DEFAULT_AVATAR =
    'https://media.comicbook.com/2018/11/dragon-ball-super-broly-ssb-goku-1145923.jpeg';
  if (req.session.userId) {
    return res.redirect('/');
  }

  if (req.route.methods.get) {
    res.render('pages/signup');
  } else {
    const { email, password, password2 } = req.body;
    if (email && password && password2) {
      authetication
        .signUp(email, password, password2)
        .then(result => {
          const userId = result.user.uid;
          firebase
            .firestore()
            .collection('users')
            .doc(userId)
            .set({ avatar: DEFAULT_AVATAR })
            .then(() => {
              res.redirect('/signin');
            })

            .catch(error => {
              console.log(error);
              res.render('pages/signup', {
                error
              });
            });
        })
        .catch(error => {
          res.render('pages/signup', {
            error
          });
        });
    }
  }
};

const signOut = (req, res) => {
  authetication
    .signOut()
    .then(() => {
      req.session.destroy(error => {
        if (error) {
          console.log(error);
          return;
        }
        res.redirect('/signin');
      });
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = {
  getSignIn,
  getSignUp,
  signOut
};
