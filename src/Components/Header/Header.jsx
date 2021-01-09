import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss";
import {Link} from "@reach/router";
import jobImage from "../../SVGs/placeholder.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose, faSearch, faTimes, faEllipsisV, faCode, faSortDown, faDoorClosed, faArrowDown} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [open, setOpen] = useState(false);
  const [filterMenu, setFilterMenu] = useState(true);
  const [filterMenuLanguages, setFilterMenuLanguages] = useState(false);
  console.log(filterMenu);


  const getApi = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jobs.github.com/positions.json?"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
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
  const displayLanguageFilter = {
    display: 'contents'
  }
  const noDisplayLanguageFilter = {
    display: 'none'
  }


  return (
    <>
    <div className = {styles.bannerContainer}>
    <h1>Foot In The <span>Door</span></h1>
    <p>The No1 site for Junior roles</p>
    <img src={jobImage} alt="" srcset=""/>
    </div>
      <header className = {styles.menu}>
        <div className = {styles.filterIconContainer} >
          <FontAwesomeIcon onClick={() => setFilterMenu(!filterMenu)} className={styles.filterIcon} icon={filterMenu === true ? faEllipsisV : faTimes}/>
        </div>
        <div className = {styles.searchContainer} >
          <input type="text" placeholder="Search..." name="" id=""/>
          <FontAwesomeIcon className={styles.menuIcon} icon = {faSearch} onClick = {getApi()} />
        </div>
        <div className = {styles.desktopFilterIcons} >
          <div>
            <li>Date Posted</li>
            <FontAwesomeIcon icon = {faArrowDown} className={styles.faArrowDown}  size = 'xs' />
          </div>
          <div>
            <li>Salary</li>
            <FontAwesomeIcon icon = {faArrowDown} size = 'xs' />
          </div>
          <div>
            <li>Type</li>
            <FontAwesomeIcon icon = {faArrowDown} size = 'xs' />
          </div>
          <div>
            <li>lorem</li>
            <FontAwesomeIcon icon = {faArrowDown} size = 'xs' />
          </div>
          <div>
            <li>lorem</li>
            <FontAwesomeIcon icon = {faArrowDown} size = 'xs' />
          </div>
          <div>
            <li>lorem</li>
            <FontAwesomeIcon icon = {faArrowDown} size = 'xs' />
          </div>
          

        </div>
        <div className = {styles.menuIconContainer} >
          <FontAwesomeIcon onClick={() => setOpen(!open)} className={styles.menuIcon} icon={open === true ? faWindowClose : faBars}/>
        </div>
      </header>    
        <div className = {styles.filterMenu} style={filterMenu === true ? displayFilterMenu : noDisplayFilterMenu}  >
          <div className = {styles.jobFilterContainer} >
            <div onClick = {() => setFilterMenuLanguages(!filterMenuLanguages)} >

              <h3>Language</h3>
              <FontAwesomeIcon icon = {faSortDown} size = 'sm'/>
            </div>
            <FontAwesomeIcon onClick={() => setFilterMenu(!filterMenu)} className={styles.filterIcon} icon={filterMenu === true ? faEllipsisV : faTimes}/>
            <ul style = {filterMenuLanguages === true ? displayLanguageFilter : noDisplayLanguageFilter} >
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
        </div>
        <div style={open === true ? displayContents : noDisplayContents} className = {styles.burgerMenuList}>
          {/* <FontAwesomeIcon onClick={() => setOpen(!open)} className={styles.menuIcon} icon={open === true ? faWindowClose : faBars}/> */}
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
