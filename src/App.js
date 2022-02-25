import React from "react";
import YaziListesi from "./components/YaziListesi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { } from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";
import YaziEkle from "./components/YaziEkle";


function App() {
  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" component={YaziDetayi} />
          <Route path="/yaziekle" component={YaziEkle} />
        </div>
      </div>

    </Router>
  );


}

export default App;
