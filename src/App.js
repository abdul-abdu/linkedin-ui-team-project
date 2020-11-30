import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSideColumn from "./components/RightSideColumn";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DropdownProfileMenu from "./components/DropdownProfileMenu";

function App() {
  return (
    <>
      <Navbar />
      <Container style={{ backgroundColor: "white" }}>
        <Row>
          <Col xs={8}>
            <DropdownProfileMenu />
          </Col>
          <Col xs={4}>
            <RightSideColumn />
          </Col>
        </Row>
        <hr />
      </Container>

      <Footer />
    </>
  );
}

export default App;
