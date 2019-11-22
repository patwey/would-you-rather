import React from 'react'
import { connect } from 'react-redux';
import QuestionResults from './QuestionResults';
import QuestionAnswerForm from './QuestionAnswerForm';

function Question({
  isAnswered,
  question,
  questionUser,
  authedUser,
}) {
  return (
    <div className="question">
      <div className="question__header">
        <img
          className="user-avatar"
          src={questionUser.avatarURL}
          alt="User avatar"
        />
        Would you rather?
      </div>
      {isAnswered ? (
        <QuestionResults
          question={question}
          authedUser={authedUser}
        />
      ) : (
        <QuestionAnswerForm question={question} />
      )}
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { question_id } = props.match.params;
  const user = users[authedUser];
  const question = questions[question_id];
  
  return {
    isAnswered: !!user.answers[question_id],
    questionUser: users[question.author],
    question,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
