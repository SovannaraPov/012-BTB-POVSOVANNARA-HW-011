import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Container>
      <Row>
        <Calculator />
      </Row>
    </Container>
  );
}

export default App;
