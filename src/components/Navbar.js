import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Navbar extends React.Component {
  handleLogOut = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null));
  }

  render() {
    const { loggedInUser } = this.props;

    return (
      <div className="navbar">
        {loggedInUser && (
          <div className="navbar__user-actions">
            <img className="user-avatar" src={loggedInUser.avatarURL} alt="User avatar" />
            <span
              className="navbar__user-actions__link"
              onClick={this.handleLogOut}
            >
              Log out
            </span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const isLoggedIn = authedUser !== null;
  const loggedInUser = isLoggedIn ? users[authedUser] : null;

  return { loggedInUser };
}

export default connect(mapStateToProps)(Navbar);
