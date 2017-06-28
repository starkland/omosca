class Exception extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

export default Exception;

// https://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax/32749533#32749533
