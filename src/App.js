import styles from "./App.module.scss";
import "./Components/Header/index.js";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Routes from "./Containers/Routes";


function App() {
  return (
    <div className={styles.App} >
      <Routes />

    </div>
  );
}

export default App;
