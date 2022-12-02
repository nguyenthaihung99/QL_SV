import { User } from './User';
import { LOGIN } from './constans';

const initialState = {
    user: [new User('nguyenthaihung65@gmail.com', '01031999.Hung')],
    login: ''
};
export const ReducerLogin = (state = initialState, action) => {
    const { type, user } = action;
    switch (type) {
        case LOGIN:
            const loginedUser = state.user.find(
                (item) =>
                    item.username === user.username &&
                    item.password === user.password
            );
            return { ...state, login: loginedUser ? loginedUser.username : '' };
        default:
            return state;
    }
};
