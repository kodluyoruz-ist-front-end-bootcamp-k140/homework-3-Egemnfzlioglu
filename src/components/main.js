import React, { useState, useContext } from "react";

// import "../../src/App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import { ThemeContext } from "../Context/ThemeContext";

const Main = () => {
  const [activeTab, setActiveTab] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);
const changeTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
}


  return (
    <>
      <div className="container">
      <button className="btn btn-danger px-5" onClick={changeTheme}>{theme} Theme</button>
      <div className="container">
        </div>
        <div
          className="btn-group tabs d-flex justify-content-center"
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={() => setActiveTab("cls")}
            className={
              activeTab === "cls" ? " col m-2 btn-primary" : "btn btn-default"
            }
          >
            Class Component
          </button>
          <h1 className="mx-5"></h1>
          <button
            onClick={() => setActiveTab("fn")}
            className={
              activeTab === "fn"
                ? " col m-2 btn btn-primary"
                : "btn btn-default"
            }
          >
            Fn Component
          </button>
        </div>
      </div>
      <div className="container">
        {activeTab === "cls" ? <ClassComponent /> : <FunctionComponent />}
      </div>
    </>
  );
};

export default Main;
