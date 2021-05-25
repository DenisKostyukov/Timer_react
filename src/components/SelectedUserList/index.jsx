import React from "react";

function SelectedUserList(props) {
  const { users } = props;
  const selectedUsers = users.filter((u) => u.isSelected);
  return (
    <div>
      {selectedUsers.map(({ firstname, lastname, id }) => (
        <span key={id}>
          {firstname} {lastname}
        </span>
      ))}
    </div>
  );
}

export default SelectedUserList;
