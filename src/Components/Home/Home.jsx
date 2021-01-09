import React, {useState, useEffect} from "react";
import styles from "./Home.module.scss";
import Header from "../Header";
import jobImage from "../../SVGs/jobImage.svg"
import JobCard from "../Home/JobCard";

const Home = (props) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jobs.github.com/positions.json?location=england"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.json())
    .then(data => setApiData(data))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

}, [])
console.log(apiData);

  return (
    <div>
      <Header />
      <div className = {styles.mainContainer}>
        <section>
          {apiData.map((job) => {
            return <JobCard job = {job} />
          })}
        </section>

    
      </div>
    </div>
  );
};
export default Home;
