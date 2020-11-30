import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSideColumn from "./components/RightSideColumn";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container style={{ backgroundColor: "grey" }}>
      <Row>
        <Col xs={9}></Col>
        <Col xs={3}>
          <RightSideColumn />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
