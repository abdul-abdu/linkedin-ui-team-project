import { Component } from "react";
import { Image, Modal, Form, Col, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";


class EditIntro extends Component {
  state = {
    show: false,
    user: {},
  }

  setModalShow = (bool) => this.setState({ show: bool })

  fetchUser = async () => {
    const url = 'https://striveschool-api.herokuapp.com/api/profile/'
    try {
      const response = await fetch(url + this.props.userInfo._id, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
        }
      })
      const parsedResponse = await response.json()
      this.setState({ user: parsedResponse })

      console.log(parsedResponse, 'parsedResponse profile')
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  render() {
    return (
      <>
        <Link onClick={() => this.setModalShow(true)}>
          <BiPencil />
        </Link>

        <Modal
          show={this.state.show}
          onHide={() => this.setModalShow(false)}
          aria-labelledby="example-custom-modal-styling-title"
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Edit Intro
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div className="coverImgHolder">
                <Image
                  src="/assets/images/cover.jpg"
                  alt="cover-img"
                  className="fluid coverImg"
                />
              </div>
              <div className="profilePic">
                {this.props.userInfo !== "" ? (
                  <img src={this.props.userInfo.image} alt="profilePic" />
                ) : (
                    <img
                      src="/assets/images/user-placeholder.png"
                      alt="profilePic"
                    />
                  )}
              </div>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.userInfo.name}

                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control type="text" value={this.props.userInfo.surname} />
                  <Link to='#aaaa'>Add former name</Link>
                </Form.Group>
              </Form.Row>
              <br />
              <Form.Row>
                <h4> + Record name pronunciation</h4>
              </Form.Row>
              <Form.Row>
                Name pronunciation can only be added using your mobile app.
              </Form.Row>
              <br />

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Headline *</Form.Label>
                <Form.Control value={this.props.userInfo.title} />
              </Form.Group>

              <Form.Row>
                <Link className='w-100'>
                  <div className='d-flex justify-content-between'>
                    <AiOutlinePlus />
                    <h5>Add current position</h5>
                  </div>
                </Link>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Show education in my intro" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Education *</Form.Label>
                <Form.Control value='Education Field' />
              </Form.Group>

              <Form.Group controlId="formGridAddress3">
                <Form.Label>Locations in this Country/Region</Form.Label>
                <Form.Control value={this.props.userInfo.area} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}


export default EditIntro