import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./Components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Portfolio from "./routes/portfolio/Portfolio";
import Contact from "./routes/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
