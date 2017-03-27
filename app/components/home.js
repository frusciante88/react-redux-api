import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import UserList from './user-list'

const Home = React.createClass({

  componentDidMount: function() {
    let data = [{ id: 1, name : 'Alessandro' }, { id : 2, name : 'Emanuele'}];
    store.dispatch(getUserSuccess(data));
  },

  render: function() {    
    return (
      <div className="home-page">
        <h1>The app is now using Redux</h1>
        <UserList users={this.props.users} />
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(Home);

