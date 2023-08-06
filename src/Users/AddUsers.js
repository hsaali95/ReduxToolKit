import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/slices/UserSlice";

const AddUsers = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const records = useSelector((state) => state.users);
  useEffect(() => {
    console.log("records", records);
  }, [records]);
  const handleAddUser = () => {
    const newData = {
      name: user,
      id: Math.floor(Math.random() * 11),
    };
    dispatch(addUser(newData));
    setUser("");
  };
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const deleteRecord = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      <h1>User List</h1>
      <button onClick={handleAddUser}>add user</button>
      <input type="text" onChange={handleChangeUser} value={user} />
      {records.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
            <button onClick={() => deleteRecord(value.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default AddUsers;
