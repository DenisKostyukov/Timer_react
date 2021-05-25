import Aloha from "../Aloha";

function AlohaList({ users }) {
  
  const createUserGreetings = (users) =>
    users.map(({id, firstname, lastname }, index) => (
      <li key={id}>
        <Aloha name={`${firstname} ${lastname}`} />
      </li>
    ));

  return <ul>{createUserGreetings(users)}</ul>;
}

export default AlohaList;
