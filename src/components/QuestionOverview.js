import React from 'react';

function QuestionOverview({
  question,
  user,
}) {
  const {
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
          A:
          <span>{optionOne.text}</span>
        </div>
        <div className="question-overview__option">
          B:
          <span>{optionTwo.text}</span>
        </div>
        <a className="question-overview__view-link" href="#">
          View
        </a>
      </div>
    </div>
  );
}

export default QuestionOverview;
