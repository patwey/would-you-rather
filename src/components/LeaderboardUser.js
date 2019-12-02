import React from 'react';
import {
  questionCount,
  answerCount,
} from '../utils/users';

function LeaderboardUser({
  user,
}) {
  const {
    avatarURL: avatarUrl,
    name,
  } = user;
  
  return (
    <div className="list-group-item card-body">
      <div className="mb-2">
        <img
          className="user-avatar"
          src={avatarUrl}
          alt="User avatar"
        />
        <span className="h5 card-title ml-2">{name}</span>
      </div>
      <ul className="leaderboard-user__statistics">
        <li>
          Asked: {questionCount(user)}
        </li>
        <li>
          Answered: {answerCount(user)}
        </li>
      </ul>
    </div>
  );
}

export default LeaderboardUser;
