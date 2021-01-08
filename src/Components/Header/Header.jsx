import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss";
import {Link} from "@reach/router";
import jobImage from "../../SVGs/placeholder.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose, faSearch, faTimes, faEllipsisV} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [open, setOpen] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false)
  const getApi = () => {
    fetch(`https://jobs.github.com/positions.json?`)
    .then (response => response.json())
    .then (data => console.log(data + 'data request'));
  }

  const noDisplayContents = {
    transform: 'translateX(200%)'
  }
  const displayContents = {
    transform: 'translateY(100%)',
    transform: 'translateX(100%)'
  }
  const displayFilterMenu = {
    transform: 'translateX(-100%)',
  }
  const noDisplayFilterMenu = {
    transform: 'translateX(0%)',
  }

  return (
    <>
    <div className = {styles.bannerContainer}>
    <h1>Foot In The <span>Door</span></h1>
    <img src={jobImage} alt="" srcset=""/>

    </div>
      <header className = {styles.menu}>
        <div className = {styles.filterIconContainer} >
          <p>Filters</p>
          <FontAwesomeIcon onClick={() => setFilterMenu(!filterMenu)} className={styles.filterIcon} icon={filterMenu === false ? faTimes : faEllipsisV}/>
        </div>
      <input type="text" placeholder="Search..." name="" id=""/>
      <FontAwesomeIcon className={styles.menuIcon} icon = {faSearch} onClick = {getApi()} />
      <div className = {styles.menuIconContainer} >
      <p>Menu</p>
      <FontAwesomeIcon onClick={() => setOpen(!open)} className={styles.menuIcon} icon={open === true ? faWindowClose : faBars}/>
      </div>
        <ul className={styles.links}>
          <Link to = {`/`}>
          Home
          </Link>
          <Link to = {`/gallery`}>
          Gallery
          </Link>
          <Link to = {`/about`}>
          About
          </Link>
        </ul>
        <ul>
        <a>Contact</a>
        </ul>
      </header>    
        <div className = {styles.filterMenu} style={filterMenu === true ? displayFilterMenu : noDisplayFilterMenu}  >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div style={open === true ? displayContents : noDisplayContents} className = {styles.burgerMenuList}>
          <Link to = {`/`}>
          Home
          </Link>
          <Link to = {`/gallery`}>
          Gallery
          </Link>
          <a>About</a>
          <a>Contact</a>
        </div> 
    </>
  );
};

export default Header;
