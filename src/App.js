import React from "react";
import "./App.css";
import LoginForm from "./components/LoginPage/LoginForm";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Page />
    </div>
  );
}

export default App;
