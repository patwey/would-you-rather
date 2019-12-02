import React from 'react';
import { Link } from 'react-router-dom';

function QuestionOverview({
  question,
  user,
}) {
  const {
    id,
    optionOne,
    optionTwo,
  } = question;
  const {
    avatarURL: avatarUrl,
    name
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
      <div className="card-text container">
        <ul>
          <li>
            {optionOne.text}
          </li>
          <li>
            {optionTwo.text}
          </li>
        </ul>
        <Link to={`questions/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}

export default QuestionOverview;
