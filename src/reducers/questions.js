import {
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
  RECEIVE_QUESTIONS,
} from '../actions/questions';

export default function questions(state = [], action) {
  switch(action.type) {
    case ADD_QUESTION:
      return [action.question].concat(state);
    case ADD_QUESTION_ANSWER:
      const {
        authedUser,
        questionId,
        answer,
      } = action.answer;
      
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat([authedUser]),
          },
        },
      };
    case RECEIVE_QUESTIONS:
      return action.questions
    default:
      return state;
  }
};
