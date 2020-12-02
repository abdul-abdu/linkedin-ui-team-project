import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {BsInfoSquareFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import '../styles/HomeRight.css'

const HomeRight = () => {
    return(
        <>
        <div class='recomandations'>
            <Row>
                <Col style={{float: 'left'}}><p className='title'>Add to your feed</p></Col>
                <Col style={{ float: 'right'}}><BsInfoSquareFill style={{fontSize: '0.9rem', float: 'right', marginTop: '3px'}}/></Col>
            </Row>
            <Row>
                <Col xs={2}><img src='/assets/images/stackoverflow.png' /></Col>
                <Col xs={6}><h6>Stackoverflow</h6></Col>
                <Col xs={3}><Row><button>
                <AiOutlinePlus style={{float: 'left', fontSize: '0.7rem', marginTop: '15%'}}/><span style={{fontSize: '0.7rem'}}>Follow
                </span></button></Row></Col>
            </Row>
            <Row>
                <Col xs={2}><img src='/assets/images/stackoverflow.png' /></Col>
                <Col xs={6}><h6>Stackoverflow</h6></Col>
                <Col xs={3}><Row><button>
                <AiOutlinePlus style={{float: 'left', fontSize: '0.7rem', marginTop: '15%'}}/><span style={{fontSize: '0.7rem'}}>Follow
                </span></button></Row></Col>
            </Row>
            <Row>
                <Col xs={2}><img src='/assets/images/stackoverflow.png' /></Col>
                <Col xs={6}><h6>Stackoverflow</h6></Col>
                <Col xs={3}><Row><button>
                <AiOutlinePlus style={{float: 'left', fontSize: '0.7rem', marginTop: '15%'}}/><span style={{fontSize: '0.7rem'}}>Follow
                </span></button></Row></Col>
            </Row>
            <h6>Click here for more recomandations</h6>
        </div>
        </>
    );
}

export default HomeRight;