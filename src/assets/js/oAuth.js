import Event from './Event';
import Exception from './Exception';

class oAuth {
  constructor(provider) {
    this.firebase = window.firebase;

    switch (provider) {
      case 'facebook':
        this.provider = new this.firebase.auth.FacebookAuthProvider();
        break;

      default:
        break;
    }
  }

  login() {
    this.firebase
      .auth()
      .signInWithPopup(this.provider)
      .then(result => Event.$emit('facebook_ok', result))
      .catch(err => new Exception(err));
  }
}

export default oAuth;
