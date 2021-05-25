import React, { Component } from "react";
import UserCard from "./UserCard";
import style from './UserList.module.css';

class UserList extends Component {
  componentDidMount() {
    console.log("Did mount");
  }
  componentDidUpdate() {
    console.log("Did update");
  }
  componentWillUnmount() {
    console.log("Will unmount");
  }
  toggleUserSelection = (id) => {
    const { users, setUsers } = this.props;

    setUsers(
      users.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      }))
    );
  };
  mapUser = (user) => {
    return (
      <UserCard
        key={user.id}
        user={user}
        toggleUserSelection={this.toggleUserSelection}
      />
    );
  };
  render() {
    const { users } = this.props;
    return (
      <section className={style.container}>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

export default UserList;
