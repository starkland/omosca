class Notification {
  constructor() {
    this.errorMessage = 'Seu browser não suporta notificações.';
    this.permission = '';
  }

  get() {
    if (!('Notification' in window)) {
      throw new Error(this.errorMessage);
    } else {
      window.Notification.requestPermission((permission) => {
        this.permission = permission;
        this.setPermission();
      });
    }
  }

  setPermission() {
    const value = this.permission;

    switch (value) {
      case 'denied':
        console.warn('denied');
        break;

      case 'granted':
        console.warn('granted');
        break;

      default:
        break;
    }
  }
}

export default Notification;
