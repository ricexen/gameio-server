import { Service } from "typedi";
import { User } from "../entity/User";
import { JWTObject } from "./JWTObject";
import * as jwt from 'jsonwebtoken';
import { BcryptService } from "./BcryptService";

const JWT_KEY = 'd7cea7305a333d5c9cebd7891abbee78960632bbb1fa5dd24122b940ff823ace';

@Service()
export class JsonWebTokenService {

  constructor(private encryptor: BcryptService) {
  }

  sign(user: User, payload: JWTObject) {
    const key = this.encryptor.encrypt(`${user.password}${JWT_KEY}`);
    return jwt.sign(payload, key);
  }

  decode<T>(token: string) {
    return jwt.decode(token) as T;
  }

}