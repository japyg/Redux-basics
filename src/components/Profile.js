import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.login.value);
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <div style={{ backgroundColor: theme }}>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
};

export default Profile;
