import { User } from '../classes/user';

export class MockUserService {
    
    getUser(){
      let user:User = new User;
      user.firstName = "Frodo";
      user.lastName = "Baggins";
      user.userId = 1;
      user.userName = "ahobbit"
      return user;
    }
  
  };
