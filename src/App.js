import Nav from "./Components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Portfolio from "./routes/portfolio/Portfolio";
import Contact from "./routes/contact/Contact";
import Logo from "./assets/logo.jsx";
import styles from "./App.module.css";

// Maintine Setup
// core styles are required for all packages
import "@mantine/core/styles.css";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 165,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={styles.mobileFix}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div className={styles.logo}>
          <Logo isLightStyle={true} />
          <h1>Whidbey Web Development</h1>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Nav />
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
