import axios from 'axios';
import Event from './Event';

class ApiService {
  constructor() {
    this.config = {
      apiKey: 'AIzaSyAStWX8HkyyG2VRyFq7UW4TphmwRoLSNeE',
      authDomain: 'omosca-app.firebaseapp.com',
      databaseURL: 'https://omosca-app.firebaseio.com',
      projectId: 'omosca-app',
      storageBucket: 'omosca-app.appspot.com',
      messagingSenderId: '353488643697',
    };

    this.firebase_url = 'https://omosca-app.firebaseio.com/';
  }

  init() {
    window.firebase.initializeApp(this.config);
    this.db = window.firebase.database();
  }

  addEvent(obj) {
    this.db.ref(`pre_events/${obj.created_at}`).set(obj);
  }

  addNews(obj) {
    this.db.ref(`newsletter/${obj.created_at}`).set(obj);
  }

  eventUpdate() {
    this.db.ref('pre_events').on('value', (snapshot) => {
      if (snapshot.val()) {
        Event.$emit('pre_events_ok', snapshot.val());
      }
    });
  }

  newsUpdate() {
    this.db.ref('newsletter').on('value', (snapshot) => {
      if (snapshot.val()) {
        Event.$emit('newsletter_ok', snapshot.val());
      }
    });
  }

  getAllEvents() {
    axios
      .get(`${this.firebase_url}/pre_events.json`)
      .then(response => Event.$emit('all_events', response))
      .catch(error => console.info(error));
  }

  getAllNews() {
    axios
      .get(`${this.firebase_url}/newsletter.json`)
      .then(response => Event.$emit('all_newsletter', response))
      .catch(error => console.info(error));
  }

  removesEventById(id) {
    if (!this.db) {
      this.db = window.firebase.database();
    }

    this.db.ref(`pre_events/${id}`).remove();
  }

  editEvent(obj) {
    if (!this.db) {
      this.db = window.firebase.database();
    }

    this.db.ref(`pre_events/${obj.created_at}`).update(obj);
  }
}

export default ApiService;
