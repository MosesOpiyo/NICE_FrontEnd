import { User } from "../AuthClass/user";

export class Profile {
  profile_pic: string; 
  user: User;

  constructor(profile_pic: string, user: User) {
    this.profile_pic = profile_pic;
    this.user = user;
  }
}
