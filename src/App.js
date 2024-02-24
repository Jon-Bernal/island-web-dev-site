import Nav from "./Components/nav/Nav.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Portfolio from "./routes/portfolio/Portfolio";
import Contact from "./routes/contact/Contact";
import Logo from "./assets/logo.jsx";
import styles from "./App.module.css";
import { Grommet } from "grommet";
import { useReducer, useEffect, useState } from "react";
import MenuButton from "./Components/menuButton/MenuButton.jsx";

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

// const actions = {
//   opening: "OPENING",
//   opened: "OPENED",
//   closing: "CLOSING",
//   closed: "CLOSED",
// };

// const navReducer = (state, navAction) => {
//   console.log("state: ", state);
//   console.log("navAction: ", navAction);
//   switch (navAction.type) {
//     case actions.opening:
//       return { ...state, nav: actions.opening };
//     case actions.opened:
//       return { ...state, nav: actions.opened };
//     case actions.closing:
//       return { ...state, nav: actions.closing };
//     case actions.closed:
//       return { ...state, nav: actions.closed };
//     default:
//       return state;
//   }
// };

// const initstate = {
//   nav: actions.closed,
// };

function App() {
  // const [state, navDispatcher] = useReducer(navReducer, initstate);

  // useEffect(() => {
  //   if (state.nav === actions.closing) {
  //     setTimeout(() => {
  //       navDispatcher({ type: actions.closed });
  //     }, 1000);
  //   } else if (state.nav === actions.opening) {
  //     setTimeout(() => {
  //       navDispatcher({ type: actions.opened });
  //     }, 1000);
  //   }
  // }, [state]);

  const [navOpen, setNavOpen] = useState(false);

  return (
    <Grommet theme={theme} full>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo isLightStyle={true} />
            <h1 className={styles.logo_text}>Whidbey Web Development</h1>
            <MenuButton
              onClick={() => setNavOpen(!navOpen)}
              navOpen={navOpen}
            />
          </div>
        </div>

        <div className={styles.desktop_nav}>
          <Nav click={() => setNavOpen(false)} />
        </div>
        <div className={styles.mobile_nav} data-navState={`${navOpen}`}>
          {navOpen && <Nav click={() => setNavOpen(false)} />}
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
      {/* <div className={styles.mobile_nav}>
        <Nav />
      </div> */}
    </Grommet>
  );
}

export default App;
