import { Service } from "typedi";
import { JsonWebTokenService } from "../JsonWebTokenService";
import { LoginResponse } from "../../interfaces/Login";
import { BcryptService } from "../BcryptService";
import { EntityManager } from "typeorm";
import { User } from "../../entity/User";
import { RegisterArgs } from "../../interfaces/Register";
import { ArgsValidator } from "vesper";
import { RegisterArsValidator } from "../validator/RegisterArgsValidator";

@Service()
export class UserRepository {

  constructor(
    private jwt: JsonWebTokenService,
    private encryptor: BcryptService,
    private entityManager: EntityManager,
  ) { }

  login(username: string, password: string): Promise<LoginResponse> | null {
    return this.entityManager.find(User, { username })
      .then(value => value[0])
      .then(user => this.encryptor.compare(user, password) ? user : null)
      .then(user => user ? {
        user,
        token: this.jwt.sign(user, { id: user.id, username: user.username })
      } : null)
  }

  @ArgsValidator(RegisterArsValidator)
  register(args: RegisterArgs) {
    const { email, acceptTerms, name } = args;
    let { password, username } = args;

    password = this.encryptor.encrypt(password);
    username = username ? username : `${email.split('@')[0]}`;

    const params = {
      password,
      username,
      email,
      acceptTerms,
      name,
      sessionToken: null
    } as User;
    let user = this.entityManager.create(User, params);
    Object.assign(user);
    return this.entityManager.save(User, user);
  }
}