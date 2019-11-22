import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestionForm extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (event, option) => {
    this.setState({ [option]: event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { authedUser } = this.props;
    const {
      optionOne,
      optionTwo,
    } = this.state;

    this.props.dispatch(
      handleAddQuestion({
        author: authedUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      }),
    );
  }

  render() {
    const {
      optionOne,
      optionTwo,
    } = this.state
    
    return (
      <form
        className="new-question-form"
        onSubmit={this.handleSubmit}
      >
        <div className="new-question-form__header">
          Create a poll:
        </div>
        <div className="new-question-form__sub-header">
          Would you rather?
        </div>
        <label htmlFor="optionOne">
          Option A:
        </label>
        <input
          type="text"
          name="optionOne"
          value={optionOne}
          onChange={(e) => this.handleChange(e, "optionOne")}
          required
        />
        <label htmlFor="optionTwo">
          Option B:
        </label>
        <input
          type="text"
          name="optionTwo"
          value={optionTwo}
          onChange={(e) => this.handleChange(e, "optionTwo")}
          required
        />
        <input
          type="submit"
          name="Submit"
        />
      </form>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(NewQuestionForm);
