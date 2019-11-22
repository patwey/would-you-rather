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
    <div className="leaderboard-user">
      <div className="leaderboard-user__header">
        <img
          className="user-avatar"
          src={avatarUrl}
          alt="User avatar"
        />
        <div className="leaderboard-user__name">
          {name}
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
    </div>
  );
}

export default LeaderboardUser;
