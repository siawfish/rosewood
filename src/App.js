import { Col, Container, Row, Card } from "react-bootstrap";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Intro />
    </>
  );
}

export default App;
