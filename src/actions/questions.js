import { saveQuestion } from '../utils/api';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export function addQuestionAnswer(questionAnswer) {
  return {
    type: ADD_QUESTION_ANSWER,
    questionAnswer,
  };
};

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export function handleAddQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question)
      .then((savedQuestion) => {
        dispatch(addQuestion(savedQuestion));
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred');
      });
  }
}
