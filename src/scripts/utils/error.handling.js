import { Notyf } from 'notyf';

class ErrorHandling {
  constructor() {
    this.notyf = new Notyf({
      duration: 3000,
      position: {
        x: 'center',
        y: 'bottom',
      },
    });

    window.notyf = this.notyf;
  }

  withError(error) {
    this.errorDetail = error;
    return this;
  }

  error(message = 'Something wrong, please try again later.') {
    this.notyf.error(message);

    if (this.errorDetail) {
      console.info(`${message}, see: ${this.errorDetail}`);

      this.errorDetail = null;
    }
  }
}

export default new ErrorHandling();
