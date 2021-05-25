import { Component } from "react";
import AlohaList from "../AlohaList";

class SortedAlohaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDirectSort: false,
    };
  }
  sortUsers = () => {
    const { isDirectSort } = this.state;
    const { users, setUsers } = this.props;
    const usersCopy = [...users];
    setUsers(
      usersCopy.sort((a, b) => (isDirectSort ? a.id - b.id : b.id - a.id))
    );
    this.setState({
      isDirectSort: !isDirectSort,
    });
  };
  render() {
    const { users } = this.props;
    return (
      <>
        <AlohaList users={users} />
        <button onClick={this.sortUsers}>Change Sort Type</button>
      </>
    );
  }
}

export default SortedAlohaList;
