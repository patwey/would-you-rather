import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
} from '../actions/users';

export default function users(state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case ADD_USER_ANSWER:
      const {
        authedUser,
        questionId,
        answer,
      } = action.answer;
      
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer,
          },
        },
      };
    default:
      return state;
  }
};
