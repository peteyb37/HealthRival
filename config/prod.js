module.exports = {
  hereAppId: process.env.HERE_APP_ID,
  hereAppCode: process.env.HERE_APP_CODE,
  sessionSecret: process.env.SESSION_SECRET,

  // firebase
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  firebaseDataBaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

  // cloudinary
  cloudinary: {
    cloud_api_key: process.env.CLOUD_API_KEY,
    cloud_api_secret: process.env.CLOUD_API_SECRET,
    cloud_name: process.env.CLOUD_NAME
  }
};
