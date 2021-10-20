/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginForm = () => {
  const [loginFields, setLoginFields] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    setLoginFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(),
      // TODO replace console.log with POST request.
      console.log(loginFields);
  };

  return (
    <div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={loginFields.username}
        name="username"
        placeholder="Jen"
        onChange={handleOnChange}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        value={loginFields.password}
        name="password"
        placeholder="password"
        onChange={handleOnChange}
      />
      <button onClick={handleSubmit} type="submit">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
