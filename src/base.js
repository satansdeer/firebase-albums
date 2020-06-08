import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "frb-albums",
  "appId": "1:384597741592:web:9dfab25140f21ba56df36d",
  "databaseURL": "https://frb-albums.firebaseio.com",
  "storageBucket": "frb-albums.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyDDARuciWs5mvhNckQLnLiaghxwwSmu-aA",
  "authDomain": "frb-albums.firebaseapp.com",
  "messagingSenderId": "384597741592"
});

