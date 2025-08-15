import React from "react";
import "./assets/css/main.css"
import Footer from "./components/Footer";
import Main from "./components/Main";
import Fon from "./components/fon/Fon";
function App() {
  return (
    <div className="App">
      <Fon />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
