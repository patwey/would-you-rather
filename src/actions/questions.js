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
