import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { GrSchedulePlay } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import abdul from "../components/abdul.jpeg";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navbar-left">
          <AiFillLinkedin className="Linkedin-icon" />

          <div className="search-input">
            <AiOutlineSearch />
            <input type="text" placeholder="search" />
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-home mx-4">
            <AiFillHome className="icon" />
            <h5 style={{ fontSize: 10 }}>Home</h5>
          </div>
          <div className="navbar-network mx-4">
            <BsFillPeopleFill className="icon" />
            <h5 style={{ fontSize: 10 }}>Network</h5>
          </div>
          <div className="navbar-work mx-4">
            <IoBagRemove className="icon" />
            <h5 style={{ fontSize: 10 }}>Work</h5>
          </div>
          <div className="navbar-msg mx-4">
            <AiFillMessage className="icon" />
            <h5 style={{ fontSize: 10 }}>Messagges</h5>
          </div>
          <div className="navbar-notifications mx-4">
            <IoMdNotifications className="icon" />
            <h5 style={{ fontSize: 10 }}>Notifications</h5>
          </div>
          <div className="navbar-profile-menu mx-4">
            {/* <CgProfile className="icon" /> */}
            <img src={abdul} alt="" />
            <h5 style={{ fontSize: 10 }}>You</h5>
          </div>
          <div className="side-menu mx-4">
            <div className="products-menu">
              <CgMenuGridR className="icon mx-4" />
              <h5 style={{ fontSize: 10 }}>Products</h5>
            </div>
            <div className="courses-menu">
              <GrSchedulePlay className="icon" />
              <h5 style={{ fontSize: 10 }}>Courses</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
