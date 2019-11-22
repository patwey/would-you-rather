export function answerCount(user) {
  return Object.entries(user.answers).length;
}

export function questionCount(user) {
  return user.questions.length;
}

export function sortByActivityTotal(userA, userB) {
  return userActivityTotal(userB) - userActivityTotal(userA);
}

function userActivityTotal(user) {
  return answerCount(user) + questionCount(user);
}
