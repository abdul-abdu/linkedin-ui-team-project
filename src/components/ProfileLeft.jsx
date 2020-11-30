import React from 'react';
import '../styles/ProfileLeft.css';
import {Dropdown, DropdownButton, Button, Container,Row,  Col} from 'react-bootstrap';
import { BiPencil } from 'react-icons/bi';


class ProfileLeft extends React.Component{
    render(){
        return(
            <>
              <div className='profile-card col-12 col-lg-8'>
                <p>Et aliqua occaecat ipsum reprehenderit eu quis officia incididunt adipisicing ea laborum sunt id. 
                Ut sint est duis do aliqua laboris excepteur aliquip voluptate cillum. Commodo velit aliqua excepteur 
                quis ullamco. Sit tempor qui anim et consequat pariatur. Ea nostrud amet laborum veniam nisi labore magna.</p>
                <div class='profile-profile-section'>
                    <div className='coverImgHolder'>
                        <img src='/assets/images/cover.jpg' alt='cover-img' className='fluid coverImg' />
                    </div>
                    <div className='profilePic'>
                        <img src='/assets/images/user-placeholder.png' alt='profilePic' />
                    </div>
                    <div className='profile-info'>
                        <div className='buttons-row'>
                        <DropdownButton id="dropdown-basic-button" title="Add profile section">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <Button id='moreBtn'>More...</Button>
                        <BiPencil className='biPencil'/>
                        </div>
                    </div>
                    <div className='nameSurnameUni'>
                        <h4>Name Surname</h4>
                        <p style={{fontSize: '1.2rem'}}>Software Engineer</p>
                        <p style={{lineHeight: '0.01rem'}}>New York • <span style={{color: '#0A66C2'}}>Contact info</span></p>
                    </div>
                    <Container className='fluid boxes'>
                        <Row className='row-cols-12 row-cols-md-12'>
                            <Col>
                                <div className='profile-info-box'>
                                    <p><strong>Show recruiters you're open to work</strong> - you control who sees this. • 
                                    <span style={{color: '#0A66C2'}}>Get started</span></p>
                                </div>
                            </Col>
                            <Col>
                                <div className='profile-info-box'>
                                    <p><strong>Share that you're hiring</strong> - and attract qualified candidates • 
                                    <span style={{color: '#0A66C2'}}>Get started</span></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
              </div>
            </>
        );
    }
}

export default ProfileLeft;