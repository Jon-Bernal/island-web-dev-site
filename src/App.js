import Nav from "./Components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Portfolio from "./routes/portfolio/Portfolio";
import Contact from "./routes/contact/Contact";
import Logo from "./assets/logo.jsx";
import styles from "./App.module.css";
import { Grommet, Box } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
      color: "white",
    },
    colors: {
      primary: "#ff6d04",
      secondary: "#0488ff",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo isLightStyle={true} />
            <h1 className={styles.logo_text}>Whidbey Web Development</h1>
          </div>
        </div>

        <div className={styles.nav}>
          <Nav />
        </div>

        <div className={styles.main}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/portfolio" Component={Portfolio} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </div>
      </div>
    </Grommet>
  );
}

export default App;
