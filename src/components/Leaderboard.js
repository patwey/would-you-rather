import React from 'react';
import { connect } from 'react-redux';
import { sortByActivityTotal } from '../utils/users';
import LeaderboardUser from './LeaderboardUser';

function Leaderboard({
  users,
}) {
  return (
    <div className="card mt-5">
      <h5 className="card-header">
        Leaderboard
      </h5>

      <div className="list-group list-group-flush">
        {users.map((user) => (
          <LeaderboardUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(sortByActivityTotal),
});

export default connect(mapStateToProps)(Leaderboard);
