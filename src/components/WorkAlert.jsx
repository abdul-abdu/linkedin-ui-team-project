import React from "react";
import { Button, Alert } from "react-bootstrap";
import "./styles/WorkAlert.css";

class WorkAlert extends React.Component {
  state = {
    show: true,
  };
  render() {
    if (this.state.show) {
      return (
        <>
          <Alert
            id="sideNav"
            onClose={() => this.setState({ show: false })}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <div className="backgroundFade"></div>
        </>
      );
    } else {
      return (
        <Button onClick={() => this.setState({ show: true })}>Show</Button>
      );
    }
  }
}

export default WorkAlert;
