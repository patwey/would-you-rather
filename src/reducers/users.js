import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
} from '../actions/users';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case ADD_USER_ANSWER:
      const {
        authedUser,
        qid,
        answer,
      } = action.answer;
      
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
};
