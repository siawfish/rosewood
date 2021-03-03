import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Features />
      <Footer />
    </>
  );
}

export default App;
