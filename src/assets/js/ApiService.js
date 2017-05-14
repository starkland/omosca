// import axios from 'axios';

import Event from './Event';
// import LocalStorage from './LocalStorage';

class ApiService {
  constructor() {
    this.config = {
      apiKey: 'AIzaSyADIQjYJyA3SzU-0pMejThDMPv3NfDRvwo',
      authDomain: 'barber-152805.firebaseapp.com',
      databaseURL: 'https://barber-152805.firebaseio.com',
      projectId: 'barber-152805',
      storageBucket: 'barber-152805.appspot.com',
      messagingSenderId: '654704351091',
    };

    window.firebase.initializeApp(this.config);

    this.db = window.firebase.database();
  }

  // getData() {}

  addNews(obj) {
    this.db.ref(`newsletter/${obj.created_at}`).set(obj);
  }

  update() {
    this.db.ref('newsletter').on('value', (snapshot) => {
      if (snapshot.val()) {
        Event.$emit('newsletter_ok', snapshot.val());
      }
    });
  }
}

export default ApiService;
