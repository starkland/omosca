class Location {
  constructor() {
    this.geolocation = navigator.geolocation;
  }

  get() {
    if (this.geolocation) {
      this.geolocation.getCurrentPosition(
          (position) => {
            this.position = [
              position.coords.latitude,
              position.coords.longitude,
            ];

            this.timestamp = position.timestamp;

            this.setGeolocation();
          },

          (err) => {
            throw new Error(`${err}`);
          },
        );
    }
  }

  setGeolocation() {
    const obj = {
      position: this.position,
      timestamp: this.timestamp,
    };

    console.warn(`Send to firebase this data: ${obj}`);
  }
}

export default Location;
