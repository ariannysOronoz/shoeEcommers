import React from 'react'
import { Header } from "./components/header/Header";
import { Carrito } from "./components/carrito/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/page/Page.js";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Carrito />
        <Pages />
      </Router>
    </div>s
    </DataProvider>
  );
}

export default App;
