import { Service } from "typedi";
import { RegisterArgs } from "../../interfaces/Register";
import {
  RegisterNoEmail,
  RegisterNoPassword,
  RegisterPasswordConfirmation,
  RegisterTermsNotAccepted,
  EmailFormatNotValid,
} from "./exception/Register";
import EmailRegex from '../validator/regex/email';

@Service()
export class RegisterArsValidator {

  validate(args: RegisterArgs) {
    if (!args.email) {
      throw new RegisterNoEmail();
    }
    if (!EmailRegex.test(args.email)) {
      throw new EmailFormatNotValid();
    }
    if (!args.password) {
      throw new RegisterNoPassword();
    }
    if (args.password !== args.passwordConfirm) {
      throw new RegisterPasswordConfirmation();
    }
    if (!args.acceptTerms) {
      throw new RegisterTermsNotAccepted();
    }
  }
}