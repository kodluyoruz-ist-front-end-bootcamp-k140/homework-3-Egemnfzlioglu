import React, { useState, useContext } from "react";

import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import { ThemeContext } from "../Context/ThemeContext";
import "../index.css";

const themes = {
  Dark: {
    backgroundColor: "#000",
    color: "#fff",
  },
  Light: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

const Main = () => {
  const [activeTab, setActiveTab] = useState("");
  const [theme, setTheme] = useState(themes);

  // const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (themes.Dark === theme) {
      setTheme(themes.Light);
      // console.log(theme);
    } else {
      setTheme(themes.Dark);
      // console.log(theme);
    }
  };

  return (
    <>
      <div style={(theme)} >
        <div className="container d-flex justify-content-center pt-4 ml-auto mr-auto" >
          <button className="btn btn-danger px-5" onClick={changeTheme}>
            {themes.Dark === theme ? "Açık Tema" : "Koyu Tema"}{" "}
          </button>
        </div>
        <div className="container" >
          <div
            className="btn-group tabs d-flex justify-content-center  m-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={() => setActiveTab("cls")}
              className={
                activeTab === "cls" ? " btn btn-primary" : "col m-2 btn btn-primary"
              }
            >
              Class Component
            </button>
            <h1 className="mx-5"></h1>
            <button
              onClick={() => setActiveTab("fn")}
              className={
                activeTab === "fn"
                  ? "  btn btn-primary"
                  : "col m-2 btn btn-primary"
              }
            >
              Fn Component
            </button>
          </div>
        </div>
        <div className="container">
          {activeTab === "cls" 
          ?<ClassComponent />
          : <FunctionComponent />
          }
        </div>
      </div>
    </>
  );
};

export default Main;
