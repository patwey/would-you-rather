import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class LoginForm extends React.Component {
  state = { selectedUser: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
    const { selectedUser } = this.state;
    
    dispatch(setAuthedUser(selectedUser))
  }

  handleUserSelect = (event) => {
    this.setState({ selectedUser: event.target.value })
  }

  render() {
    const { users } = this.props;

    return (
      <form
        id="login-form"
        onSubmit={this.handleSubmit}
      >
        <div>
          <label htmlFor="user-select">
            Please select a user:
          </label>
          <select
            id="user-select"
            onChange={this.handleUserSelect}
          >
            <option
              key="blank"
              value=""
            >
              Select a user
            </option>
            {Object.entries(users).map(([id, user]) => (
              <option
                key={id}
                value={id}
              >
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            id="login-submit"
            type="submit"
            value="Log In"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(LoginForm);
