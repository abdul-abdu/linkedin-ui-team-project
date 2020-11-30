import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSideColumn from "./components/RightSideColumn";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Row>
        <Col xs={8}></Col>
        <Col xs={4}>
          <RightSideColumn />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
