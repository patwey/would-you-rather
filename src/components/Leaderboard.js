import React from 'react';
import { connect } from 'react-redux';
import { sortByActivityTotal } from '../utils/users';
import LeaderboardUser from './LeaderboardUser';

function Leaderboard({
  users,
}) {
  return (
    <div className="leaderboard">
      <div className="leaderboard__header">
        Leaderboard:
      </div>

      {users.map((user) => (
        <LeaderboardUser key={user.id} user={user} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(sortByActivityTotal),
});

export default connect(mapStateToProps)(Leaderboard);
