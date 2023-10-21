import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./components/header/header";
import LoginContainer from "./components/loginContainer/loginComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderComponent />
    <LoginContainer />
  </>
);
