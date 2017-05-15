import Event from './Event';

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
      .catch((err) => {
        console.warn(err);
      });
  }
}

export default oAuth;
