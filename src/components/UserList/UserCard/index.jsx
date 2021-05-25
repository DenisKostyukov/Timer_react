function UserCard(props) {
  const {
    user: { id, firstname, lastname, isSelected },
    toggleUserSelection,
  } = props;
  const style = {
    border: isSelected ? "5px solid black" : undefined,
    color: isSelected ? "green" : "gray",
  };
  return (
    <article
      onClick={() => toggleUserSelection(id)}
      style={style}
      className={`userCard ${isSelected ? 'selected' : ''}`}
    >
      <p>ID: {id}</p>
      <h1>
        User Name: {firstname} {lastname}
      </h1>
    </article>
  );
}
export default UserCard;
