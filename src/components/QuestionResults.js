import React from 'react';

function QuestionResults({
  authedUser,
  question,
}) {
  const {
    optionOne,
    optionTwo,
  } = question;
  
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  
  const voteStatistics = (option) => {
    const { votes } = option;
    const votePercentage = (votes.length / totalVotes) * 100;

    return `${votes.length} vote(s) (${parseInt(votePercentage)}%)`;
  }

  const optionClass = (option) => (
    option.votes.includes(authedUser)
      ? "question-results__option--active"
      : "question-results__option"
  );
  
  return (
    <div className="question-results">
      <div className={optionClass(optionOne)}>
        <div className="question-results__option-text">
          A: {optionOne.text}
        </div>
        <div className="question-results__option-statistics">
          {voteStatistics(optionOne)}
        </div>
      </div>
      <div className={optionClass(optionTwo)}>
        <div className="question-results__option-text">
          B: {optionTwo.text}
        </div>
        <div className="question-results__option-statistics">
          {voteStatistics(optionTwo)}
        </div>
      </div>
    </div>
  );
}

export default QuestionResults;
