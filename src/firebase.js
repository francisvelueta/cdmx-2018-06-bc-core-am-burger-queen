import * as firebase from 'firebase';

// import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAQoYyp4v0ReWnjEAk86B5v2yck4nlgJ3Y",
      authDomain: "burguer-queen-886ad.firebaseapp.com",
      databaseURL: "https://burguer-queen-886ad.firebaseio.com",
      projectId: "burguer-queen-886ad",
      storageBucket: "burguer-queen-886ad.appspot.com",
      messagingSenderId: "1097751575158"
};
// const db = firebase.firestore()

export const firebaseApp = firebase.initializeApp(config);

const createUser = user =>
{
  const labRef = db.collection('lab')
  const u = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL
  }
  return labRer.doc(u.uid).set(u)
  .then(doc =>
  console.log(doc.data()))
}

// gLogin .then(res => {
// localStorage.setItem('user', true)
// })

// componentDidMount()

// if(!localStorage.getItem('user')) this.props.history.goBack()
