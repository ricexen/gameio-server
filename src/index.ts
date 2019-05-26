import { bootstrap } from 'vesper';
import { UserController } from './controller/UserController';
import { User } from './entity/User';

const port = 3000;

bootstrap({
  port,
  controllers: [UserController],
  entities: [User],
  schemas: [
    `${__dirname}/schema/**/*.graphql`,
  ]
})
  .then(() => {
    console.log("Your app is up and running on http://localhost:3000.");
    console.log("You can use playground in development mode on http://localhost:3000/playground");
  })
  .catch((error) => {
    console.error(error.stack ? error.stack : error);
  })