import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import styles from "./Gallery.module.scss";
import Header from "../Header";
import Placeholder from "../../SVGs/placeholder.svg"

const Gallery = () => {
  const [interiorPhotos, setInteriorPhotos] = useState(false);
  const [exteriorPhotos, setExteriorPhotos] = useState(false);

  const styling = {
    backgroundColor: 'blue'
  };
  const truthFunction = (state, element) => {
      return state === true ? element : null;
  }
  const dontShowBothCategories = () => {
    if (interiorPhotos === false){
    return () => setInteriorPhotos(true)
    }
    else {
    return  () => setInteriorPhotos(false)
      } 
    
  }

  return (
    <div>
      <Header />
      <div className = {styles.container}>
        <section>
          <header className={styles.gallerNav}>
            <a onClick = {dontShowBothCategories()} >Interior</a>
            <a onClick = {dontShowBothCategories()} >Exterior</a>
            <a onClick = {dontShowBothCategories()} >Garden</a>

            {/* <a onClick = {() => setPhotos(3)} >Area</a> */}
          </header>
          <div className={styles.imageContainer} >
            <div >
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>
              <img src={truthFunction(interiorPhotos, Placeholder)} alt=""/>

            </div>
            <div >
              <img  style={styling} src={truthFunction(exteriorPhotos, Placeholder)} alt=""/>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  );

};

export default Gallery;
