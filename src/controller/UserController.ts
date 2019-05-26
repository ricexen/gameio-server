import { Controller, Query, Mutation } from 'vesper';
import { EntityManager } from 'typeorm';
import { User } from '../entity/User';

@Controller()
export class UserController {
  constructor(private entityManager: EntityManager) { }

  @Query()
  me() {

  }

  @Query()
  user(username: string) {
    return { username };
  }

  @Mutation()
  login(username: string, password: string) {
    const user = this.entityManager.create(User, { username, password });
    return this.entityManager.save(User, user);
  }

  @Mutation()
  register(args) {
    return { args };
  }
}