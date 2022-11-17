import { LOGIN } from './constans';
import { User } from './User';

export const login =( username, password)=>{
    return {type : LOGIN, user : new User(username, password)}
}

