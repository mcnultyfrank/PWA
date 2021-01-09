import React, {useState, useEffect} from "react";
import styles from "./Home.module.scss";
import Header from "../Header";
import jobImage from "../../SVGs/jobImage.svg"

const Home = () => {

  return (
    <div>
      <Header />
      <div className = {styles.mainContainer}>
        <section>
          <div className= {styles.jobContainer}>
      
          </div>
        </section>

    
      </div>
    </div>
  );
};
export default Home;
