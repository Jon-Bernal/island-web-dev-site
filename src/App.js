import Nav from "./Components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Portfolio from "./routes/portfolio/Portfolio";
import Contact from "./routes/contact/Contact";

// Maintine Setup
// core styles are required for all packages
import "@mantine/core/styles.css";
import { AppShell } from "@mantine/core";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

function App() {
  return (
    <AppShell>
      {/* <AppShell.Header></AppShell.Header> */}
      <AppShell.Navbar>
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
