import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/shared';

class QuestionAnswerForm extends React.Component { 
  state = { answer: "optionOne" };

  handleAnswer = (event) => {
    const answer = event.target.value;

    this.setState({ answer });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    const {
      authedUser,
      dispatch,
      question,
    } = this.props;

    const { answer } = this.state;

    dispatch(
      handleAddQuestionAnswer({
        qid: question.id,
        answer,
        authedUser,
      }),
    );
  }

  render() {
    const { question } = this.props;
    const {
      optionOne,
      optionTwo,
    } = question;

    return (
      <form
        className="question-answer-form"
        onSubmit={this.handleSubmit}
      >
        <div className="question-answer-form__option">
          <input
            type="radio"
            name="optionOne"
            value="optionOne"
            checked={this.state.answer === "optionOne"}
            onChange={this.handleAnswer}
          />
          <label htmlFor="optionOne">
            A: {optionOne.text}
          </label>
        </div>
        <div className="question-answer-form__option">
          <input
            type="radio"
            name="optionTwo"
            value="optionTwo"
            checked={this.state.answer === "optionTwo"}
            onChange={this.handleAnswer}
          />
          <label htmlFor="optionTwo">
            B: {optionTwo.text}
          </label>      
        </div>
        <input
          type="submit"
          value="submit"
        />
      </form>
    );
  }
}

const mapStateToProps = ({ authedUser }, { question }) => ({
  question,
  authedUser,
});

export default connect(mapStateToProps)(QuestionAnswerForm);
