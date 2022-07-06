import { useState, useEffect } from "react";

import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { ThemeContext } from "./Context/ThemeContext";
import Main from "./components/main";

function App() {
  const [theme, setTheme] = useState("light");



  useEffect(() => {
    document.body.className=theme;
  }, [theme]);

  const data = {
    theme,
    setTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={data}>
        <Main />
        <FunctionComponent />
        
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
