import { useState } from "react";

import { ThemeContext } from "./Context/ThemeContext";
import Main from "./components/main";
import "./App.css";
import "./style.css"

function App() {
  const [theme, setTheme] = useState("");



  const data = {
    theme,
    setTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={data}>
        <Main />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
