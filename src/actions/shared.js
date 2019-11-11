import {
  getInitialData,
  saveQuestionAnswer,
} from "../utils/api";
import {
  addUserAnswer,
  receiveUsers,
} from "./users";
import {
  addQuestionAnswer,
  receiveQuestions,
} from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    });
  };
};

export function handleAddQuestionAnswer(answer) {
  return (dispatch) => {
    return saveQuestionAnswer(answer)
      .then(() => {
        dispatch(addQuestionAnswer(answer))
        dispatch(addUserAnswer(answer))
      })
      .catch(() => {
        alert('An error occurred.')
      });
  };
}
