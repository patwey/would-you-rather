import React from 'react';
import { connect } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import QuestionOverviewList from './QuestionOverviewList';
import Question from './Question'
import NewQuestionForm from './NewQuestionForm';
import Leaderboard from './Leaderboard';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import NotFound from './NotFound';

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
        <Router>
          <Navbar authedUser={authedUser} />
          <div className="container">
            {loggedIn ? (
              <Switch>
                <Route path='/' exact component={QuestionOverviewList} />
                <Route path='/questions/:question_id' component={Question} />
                <Route path='/add' component={NewQuestionForm} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route component={NotFound} />
              </Switch>
            ) : (
              <LoginForm />
            )}
          </div>
        </Router>
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
