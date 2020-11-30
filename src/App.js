import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <Navbar />

      <ProfilePage />

      <Footer />
    </>
  );
}

export default App;
