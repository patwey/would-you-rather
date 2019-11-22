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
    <div className="question-overview">
      <div className="question-overview__header">
        <img
          className="user-avatar"
          src={avatarUrl}
          alt="User avatar"
        />
        <span>{name}</span>
      </div>
      <div className="question-overview__body">
        <div className="question-overview__option">
          A: {optionOne.text}
        </div>
        <div className="question-overview__option">
          B: {optionTwo.text}
        </div>
        <Link
          to={`questions/${id}`}
          className="question-overview__link"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default QuestionOverview;
