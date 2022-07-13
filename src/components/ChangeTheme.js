import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../slices/changeThemeSlice";

const ChangeTheme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeTheme(color));
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ChangeTheme;
