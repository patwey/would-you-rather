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
    const { selectedUser } = this.state;

    return (
      <div className="login-form container mt-5">
        <div className="card">
          <h5 className="card-header">
            Log In
          </h5>
          <form
            id="login-form"
            className="card-body"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <select
                className="form-control"
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
            <input
              className="btn btn-primary"
              type="submit"
              value="Log In"
              disabled={selectedUser === ""}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(LoginForm);
