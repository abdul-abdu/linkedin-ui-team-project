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
import { Container, DropdownButton, Dropdown, Image } from "react-bootstrap";



// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   headers: {
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzY1ODRiY2RlMTAwMTc2MTZhOTEiLCJpYXQiOjE2MDUwOTI5NTIsImV4cCI6MTYwNjMwMjU1Mn0.167moYNgptnQpkntwtLaEyr3cDG3_2 - rg9gOnjJ4syQ"
//   }
// }

class Navbar extends React.Component {

  state = {
    user: ''
  }

  componentDidMount = () => {
    this.fetchProfile();
  };

  fetchProfile = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_BE_URL}`
        }
      })
      const parsedResponse = await response.json();
      console.log(parsedResponse, 'parsedResponse');
      this.setState({ user: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

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
              <DropdownButton
                menuAlign="right"
                title="Me"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Item eventKey="1">
                  {this.state.user !== "" ? (
                    <>
                      <Image href={this.state.image} />
                      <h6>

                        {this.state.user.name}
                      </h6>
                    </>
                  ) : (
                      <h6>Name</h6>
                    )}
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  {this.state.user !== "" ? (
                    <h6>
                      {this.state.user.surname}
                    </h6>
                  ) : (
                      <h6>surname</h6>
                    )}
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  {this.state.user !== "" ? (
                    <span>
                      {this.state.user.title}
                    </span>
                  ) : (
                      <h6>job title</h6>
                    )}
                </Dropdown.Item>
                <Dropdown.Item eventKey="4" style={{ borderRadius: '20px', color: 'blue', border: '1px solid blue' }}>View Profile</Dropdown.Item>
                <Dropdown.Divider />
              </DropdownButton>
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
