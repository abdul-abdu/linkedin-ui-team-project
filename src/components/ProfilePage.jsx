import React from "react";
import ProfileLeft from "./ProfileLeft";
import { Container } from "react-bootstrap";
import RightSideColumn from "./RightSideColumn";

const ProfilePage = () => {
  return (
    <>
      <Container>
        <ProfileLeft />
        <RightSideColumn />

        <hr />
      </Container>
    </>
  );
};

export default ProfilePage;
