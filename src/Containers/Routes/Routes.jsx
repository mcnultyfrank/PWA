import React from "react";
import styles from "./Routes.module.scss";
import Home from "../../Components/Home";
import Gallery from "../../Components/Gallery";
import About from "../../Components/About";

import {Router} from "@reach/router";


const Routes = () => {
  return (
    <Router>
      <Home path = "/"/>
      <Gallery path = "gallery"/>
      <About path = "about"/>
    </Router>
  );
};

export default Routes;
