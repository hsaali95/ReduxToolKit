import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin, deleteAdmin } from "../store/slices/AdminSlice";

const Admin = () => {
  const [admin, setAdmin] = useState("");
  const dispatch = useDispatch();
  const records = useSelector((state) => state.admin);
  useEffect(() => {
    console.log("records", records);
  }, [records]);
  const handleAddUser = () => {
    const newData = {
      name: admin,
      id: Math.floor(Math.random() * 11),
    };
    dispatch(addAdmin(newData));
    setAdmin("");
  };
  const handleChangeAdmin = (e) => {
    setAdmin(e.target.value);
  };
  const deleteRecord = (id) => {
    dispatch(deleteAdmin(id));
  };
  return (
    <>
      <h1>User Admin</h1>
      <button onClick={handleAddUser}>add admin</button>
      <input type="text" onChange={handleChangeAdmin} value={admin} />
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

export default Admin;
