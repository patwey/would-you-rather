import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class NewQuestionForm extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
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

    this.setState({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    })
  }

  render() {
    const {
      optionOne,
      optionTwo,
      toHome,
    } = this.state

    if (toHome) {
      return <Redirect to="/" />;
    }
    
    return (
      <form
        className="card mt-5"
        onSubmit={this.handleSubmit}
      >
        <h5 className="card-header">
          Create a poll - Would you rather?
        </h5>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="optionOne">
              Option One:
            </label>
            <input
              className="form-control"
              type="text"
              id="optionOne"
              value={optionOne}
              onChange={(e) => this.handleChange(e, "optionOne")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="optionTwo">
              Option Two:
            </label>
            <input
              className="form-control"
              type="text"
              id="optionTwo"
              value={optionTwo}
              onChange={(e) => this.handleChange(e, "optionTwo")}
              required
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            name="Submit"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(NewQuestionForm);
