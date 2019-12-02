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
      ? "text-primary font-weight-bold"
      : ""
  );
  
  return (
    <div className="question-results">
      <div className={optionClass(optionOne)}>
        {optionOne.text}
      </div>
      <ul>
        <li>
          {voteStatistics(optionOne)}
        </li>
      </ul>
      <div className={optionClass(optionTwo)}>
        {optionTwo.text}
      </div>
      <ul>
        <li>
          {voteStatistics(optionTwo)}
        </li>
      </ul>
    </div>
  );
}

export default QuestionResults;
