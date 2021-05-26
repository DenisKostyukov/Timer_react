import "./App.css";
import React, { useState } from "react";
import SelectedUserList from "./components/SelectedUserList";
import UserList from "./components/UserList";
import Timer from "./components/Timer";
import Form from './components/Form'
const usersDB = [
  {
    id: 1,
    firstname: "John",
    lastname: "Smith",
  },
  {
    id: 2,
    firstname: "Bob",
    lastname: "Brown",
  },
  {
    id: 3,
    firstname: "Sara",
    lastname: "Smith",
  },
  {
    id: 4,
    firstname: "Mary",
    lastname: "Black",
  },
];

/*
  Перепишите Aloha, App как функциональные компоненты
*/

function App(props) {
  const defaultUsers = usersDB.map((user) => ({
    ...user,
    isSelected: false,
  }));
  const [users, setUsers] = useState(defaultUsers);
  const [isHidden, setIsHidden] = useState(false);
  const hideHandler = () => setIsHidden(!isHidden);

  const registerUser= (user) =>{
    const newUsersArray = [...users];
    const lastId = newUsersArray.reduce((acc,cur)=>(cur.id>acc ? cur.id :acc),0);
    newUsersArray.push({...user,id:lastId+1})
    setUsers(newUsersArray)
  }
  return (
    <>
      <header>
        <SelectedUserList users={users} />
      </header>
      <main>
        <button onClick={hideHandler}>Hide</button>
        {!isHidden && <UserList users={users} setUsers={setUsers} />}
        <Timer />
        <Form registerUser={registerUser}/>
      </main>
    </>
  );
}
export default App;
