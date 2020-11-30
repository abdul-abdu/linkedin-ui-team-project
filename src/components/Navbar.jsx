import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { GrSchedulePlay } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import abdul from "../components/abdul.jpeg";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    return (
      <Container fluid className="main-container">
        <div className="header container-lg">
          <div className="navbar-left">
            <AiFillLinkedin className="Linkedin-icon" />

            <div className="search-input">
              <AiOutlineSearch />
              <input type="text" placeholder="search" />
            </div>
          </div>

          <div className="navbar-right">
            <div className="navbar-home mx-3 text-center">
              <AiFillHome className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Home
              </h5>
            </div>
            <div className="navbar-network mx-3 text-center">
              <BsFillPeopleFill className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Network
              </h5>
            </div>
            <div className="navbar-work mx-3 text-center">
              <IoBagRemove className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Work
              </h5>
            </div>
            <div className="navbar-msg mx-3 text-center">
              <AiFillMessage className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Messagges
              </h5>
            </div>
            <div className="navbar-notifications mx-3 text-center">
              <IoMdNotifications className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Notifications
              </h5>
            </div>
            <div className="navbar-profile-menu mx-3 text-center">
              {/* <CgProfile className="icon" /> */}
              <img src={abdul} alt="" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                You
              </h5>
            </div>
            <div className="side-menu mx-4">
              <div className="products-menu text-center">
                <CgMenuGridR className="icon mx-4" />
                <h5
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    marginTop: 4,
                    fontWeight: 400,
                  }}
                >
                  Products
                </h5>
              </div>
              <div className="courses-menu text-center">
                <GrSchedulePlay className="icon" />
                <h5
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    marginTop: 4,
                    fontWeight: 400,
                  }}
                >
                  Courses
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Navbar;
