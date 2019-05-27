import { Controller, Query, Mutation } from 'vesper';
import { EntityManager } from 'typeorm';
import { User } from '../entity/User';
import { JsonWebTokenService } from '../service/JsonWebTokenService';
import { QueryArgs } from '../interfaces/Query';
import { LoginArgs } from '../interfaces/Login';
import { RegisterArgs } from '../interfaces/Register';
import { UserRepository } from '../service/repository/UserRepository';

@Controller()
export class UserController {
  constructor(
    private entityManager: EntityManager,
    private jwt: JsonWebTokenService,
    private userRepo: UserRepository,
  ) { }

  @Query()
  me(args: QueryArgs) {
    const { token } = args;
    const id = this.jwt.decode(token);
    return this.entityManager.findOne(User, id);
  }

  @Query()
  user(username: string) {
    return { username };
  }

  @Mutation()
  login(args: LoginArgs) {
    const { username, password } = args;
    return this.userRepo.login(username, password);
  }

  @Mutation()
  register(args: RegisterArgs) {
    return this.userRepo.register(args);
  }
}