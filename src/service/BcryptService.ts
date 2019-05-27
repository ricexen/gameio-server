import { Service } from 'typedi';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import { User } from '../entity/User';

const SALT_ROUNDS = 10;

@Service()
export class BcryptService {
  encrypt(password: string) {
    const salt = genSaltSync(SALT_ROUNDS);
    const hash = hashSync(password, salt);
    return hash;
  }

  compare(user: User, password: string) {
    return user && user.password && compareSync(password, user.password);
  }
}