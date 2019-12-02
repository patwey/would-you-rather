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
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="optionOne"
              value="optionOne"
              checked={this.state.answer === "optionOne"}
              onChange={this.handleAnswer}
            />
            <label
              className="form-check-label"
              htmlFor="optionOne"
            >
              {optionOne.text}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="optionTwo"
              value="optionTwo"
              checked={this.state.answer === "optionTwo"}
              onChange={this.handleAnswer}
            />
            <label
              className="form-check-label"
              htmlFor="optionTwo"
            >
              {optionTwo.text}
            </label>      
          </div>
        </div>
        <input
          className="btn btn-primary"
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
