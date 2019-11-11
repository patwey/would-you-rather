import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import QuestionOverviewList from './QuestionOverviewList';
import LoginForm from './LoginForm';
import Navbar from './Navbar';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const {
      loggedIn,
      authedUser,
    } = this.props;
    
    return (
      <div className="App">
        <Navbar authedUser={authedUser} />
        
        {loggedIn ? (
          <QuestionOverviewList />
        ) : (
          <LoginForm />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedIn: authedUser !== null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
