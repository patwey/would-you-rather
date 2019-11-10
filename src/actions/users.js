export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function addUserAnswer(answer) {
  return {
    type: ADD_USER_ANSWER,
    answer,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
};
