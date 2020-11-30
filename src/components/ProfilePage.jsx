import React from 'react';
import ProfileLeft from './ProfileLeft';
import {Container, Row} from 'react-bootstrap';
import RightSideColumn from './RightSideColumn';
 
const ProfilePage = () =>{
    return(
        <>
          <Container>
            <Row>
            <ProfileLeft />
            <RightSideColumn />
            </Row>
          </Container>
        </>
    );
}

export default ProfilePage;