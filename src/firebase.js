import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQoYyp4v0ReWnjEAk86B5v2yck4nlgJ3Y",
      authDomain: "burguer-queen-886ad.firebaseapp.com",
      databaseURL: "https://burguer-queen-886ad.firebaseio.com",
      projectId: "burguer-queen-886ad",
      storageBucket: "burguer-queen-886ad.appspot.com",
      messagingSenderId: "1097751575158"
};

export const firebaseApp = firebase.initializeApp(config);
