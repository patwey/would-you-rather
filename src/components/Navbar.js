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
      loggedInUser && (
        <nav className="navbar navbar-light navbar-expand-lg bg-light"> 
          <div className="navbar-nav mr-auto">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="nav-item nav-link"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/leaderboard"
              activeClassName="active"
              className="nav-item nav-link nav-link"
            >
              Leaderboard
            </NavLink>
            <NavLink
              to="/add"
              activeClassName="active"
              className="nav-item nav-link"
            >
              Add Question
            </NavLink>
          </div>
          <div className="mx-2">
            <img
              className="nav-item user-avatar mr-2"
              src={loggedInUser.avatarURL}
              alt="User avatar"
            />
            <div className="nav-item navbar-text user-name mr-2">
              {loggedInUser.name}
            </div>
            <button
              className="nav-item btn btn-sm btn-outline-secondary mr-2"
              onClick={this.handleLogOut}
            >
              Log out
            </button>
          </div>
        </nav>          
      )
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const isLoggedIn = authedUser !== null;
  const loggedInUser = isLoggedIn ? users[authedUser] : null;

  return { loggedInUser };
}

export default connect(mapStateToProps)(Navbar);
