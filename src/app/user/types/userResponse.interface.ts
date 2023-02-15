import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

export interface UserResponseInterface {
  uuid: string;
  email: string;
  password: string;
  first_name: string;
	last_name: string;
	gender: string;
	hobbies: string;
  occupation: string;
	username: string;
  address: string
  createdAt: string;
  updatedAt: string;
}
