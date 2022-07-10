import React, { useState } from "react";

import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
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

  const changeTheme = () => {
    if (themes.Dark === theme) {
      setTheme(themes.Light);
      // console.log(theme);
    } else {
      setTheme(themes.Dark);
      // console.log(theme);
    }
  };



  // ### merkezi komuta bölümü
  //

  return (
    <>
      <div style={theme}>
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 5%",
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>
            Egemen Fazlıoğlu - ReactJS || 3.HAFTA BOOTCAMP ÖDEVİ
          </p>

          <div style={{ display: "flex", margin: "0 20%" }}>
            <button
              onClick={() => setActiveTab("cls")}
              className={
                activeTab === "cls" ? " btn btn-primary" : " btn btn-primary" // butonlara extra bırsey eklenmek ısterse (renklendırme v.s buradan yapılabilir)
              }
            >
              Class Component
            </button>
            <button
              onClick={() => setActiveTab("fn")}
              className={
                activeTab === "fn" ? "  btn btn-primary" : "btn btn-primary"
              }
            >
              Fn Component
            </button>
          </div>

          <button
            className="btn-danger"
            style={{
              height: "4rem",
              width: "10%",
              cursor: "pointer",
              fontSize: "1.3rem",
            }}
            onClick={changeTheme}
          >
            {" "}
            {themes.Dark === theme ? (
              <span>🌞 Light Theme</span>
            ) : (
              <span>🌙 Dark Theme</span>
            )}
          </button>
        </div>

        <div className="container">
          {activeTab === "cls" ? <ClassComponent /> : <FunctionComponent />}
        </div>
      </div>
    </>
  );
};

export default Main;
