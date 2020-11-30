import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <LinkedInIcon />
        </div>

        <div className="navbar-right"></div>
      </div>
    );
  }
}

export default Navbar;
