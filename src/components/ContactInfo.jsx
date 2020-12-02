import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { MdCake } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';


const ContactInfo = ({ userInfo }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link onClick={handleShow}>
        Contact Info
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{userInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-between'>
            <h2>Contact Info</h2>
            <BiPencil />
          </div>
          <div>
            <AiFillLinkedin />
            <Link>linkedin.com/in/abdugaffor-abdurahimov-baa398192</Link>
          </div>
          <div>
            <FiPhone />
            <h4>Phone</h4>
            <span>phone number</span>
          </div>
          <div>
            <AiOutlineMail />
            <Link>Email</Link>
            <span>user email</span>
          </div>
          <div>
            <MdCake />
            <h4>Birthday</h4>
            <span>Users birthday</span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}



export default ContactInfo