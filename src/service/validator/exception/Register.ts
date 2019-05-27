export class RegisterNoEmail extends Error {
  constructor() {
    super('Username or email not supplied');
  }
}

export class EmailFormatNotValid extends Error {
  constructor() {
    super("Email format not valid");
  }
}

export class RegisterNoPassword extends Error {
  constructor() {
    super('Password not supplied');
  }
}

export class RegisterPasswordConfirmation extends Error {
  constructor() {
    super('Password confirmation not correct');
  }
}

export class RegisterTermsNotAccepted extends Error {
  constructor() {
    super('Terms and conditions not accepted');
  }
}