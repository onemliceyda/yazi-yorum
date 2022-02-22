import React from "react";
import YaziListesi from "./components/YaziListesi";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>

    <div className="main_wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
      
        <YaziListesi/> 

      </div>

    </div>
    </Router>
  );

}

export default App;
