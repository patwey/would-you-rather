import React from 'react';
import { connect } from 'react-redux';
import QuestionOverview from './QuestionOverview';

class QuestionOverviewList extends React.Component {
  state = { showUnanswered: true };

  handleShowUnanswered = (showUnanswered) => {
    this.setState({ showUnanswered });
  }

  render() {
    const {
      answeredQuestions,
      unansweredQuestions,
      users,
    } = this.props;
    const { showUnanswered } = this.state;
    const questions = showUnanswered ? unansweredQuestions : answeredQuestions;
    
    return (
      <div id="question-overview-list">
        <div className="question-type-links">
          <span
            className="question-type-link"
            onClick={() => this.handleShowUnanswered(true)}
          >
            Unanswered
          </span>
          /
          <span
            className="question-type-link"
            onClick={() => this.handleShowUnanswered(false)}
          >
            Answered
          </span>
        </div>
        <div className="question-overviews">
          {questions.map((question) => (
            <QuestionOverview
              key={question.id}
              question={question}
              user={users[question.author]}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions: questionsState, users }) => {
  const answers = users[authedUser].answers;
  const questions = Object.values(questionsState);

  return {
    answeredQuestions: questions
      .filter(({ id }) => answers[id])
      .sort(question => -question.timestamp),
    unansweredQuestions: questions
      .filter(({ id }) => !answers[id])
      .sort((question) => -question.timestamp),
    users,
  };
};


export default connect(mapStateToProps)(QuestionOverviewList)
