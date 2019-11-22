import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
          <>
            <div className="navbar__links">
              <NavLink
                to="/"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/leaderboard"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Leaderboard
              </NavLink>
              <NavLink
                to="/add"
                activeClassName="navbar__link--active"
                className="navbar__link"
              >
                Add Question
              </NavLink>
            </div>
            <div className="navbar__user-actions">
              <img className="user-avatar" src={loggedInUser.avatarURL} alt="User avatar" />
              <div className="user-name">{loggedInUser.name}</div>
              <button
                className="navbar__user-actions__link"
                onClick={this.handleLogOut}
              >
                Log out
              </button>
            </div>
          </>
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
