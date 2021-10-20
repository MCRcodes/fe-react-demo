/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginForm = () => {
  const [loginFields, setLoginFields] = useState({
    username: "Jen",
    password: "",
  });

  const handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    setLoginFields({ ...loginFields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={loginFields.username}
        name="username"
        onChange={handleOnChange}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        value={loginFields.password}
        name="password"
        onChange={handleOnChange}
      />
      <button type="submit">Login</button>
    </div>
  );
};

export default LoginForm;
