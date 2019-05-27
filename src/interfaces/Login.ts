import { User } from "../entity/User";

export interface LoginArgs {
  username: string;
  password: string;
}

export interface UserPayload {
  id: string;
  username: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}