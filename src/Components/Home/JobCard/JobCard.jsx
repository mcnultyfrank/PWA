import React from "react";
import styles from "./JobCard.module.scss";

const JobCard = (props) => {
  const {title} = props.job;
  console.log(title);
  
  return (
    <>

    <div className= {styles.jobContainer}>
            <div>
            <h1>
             {title}
              </h1>
              <h2>company</h2>
              <h2>salary</h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, nihil.</p>
            </div>

          </div>
    </>
  );
};

export default JobCard;
