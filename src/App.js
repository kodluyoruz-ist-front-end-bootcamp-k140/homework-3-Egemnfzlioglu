import { useState, useEffect, useContext } from "react";

import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { ThemeContext } from "./Context/ThemeContext";
import Main from "./components/main";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // document.body.className = theme;
  }, [theme]);

  const data = {
    theme,
    setTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={data}>
        <Main />?
        {<FunctionComponent />?
        <></>:

        <ClassComponent />}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
