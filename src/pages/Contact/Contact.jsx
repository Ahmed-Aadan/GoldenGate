import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import MainLocationImg from '../../utils/images/Main-location.jpg';
import ThirdLocationImg from '../../utils/images/Third.jpg';
import SecondLocationImg from '../../utils/images/Second.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Get In Touch</h1>
                <p className='text-center w-75 mb-5'>For inquiries or to learn more about Golden Gate University, contact us today. Located in Somalia, our dedicated team is ready to assist with admissions, program details, and more. Reach out to discover how GGU can support your academic and career aspirations.</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Your address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location</Form.Label>
                        <Form.Select defaultValue="Banaadir">
                            <option>Banaadir</option>
                            <option>Digfer</option>
                            <option>KM4</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Locations</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={MainLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Banaadir</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ThirdLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Digfer</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={SecondLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>KM4</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;