import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Welcome to our Frequently Asked Questions about Golden Gate University! Find quick answers to common inquiries about admissions, programs, campus life, financial aid, and more. Whether you're a prospective student or a parent, this section provides essential information to help you navigate the college selection process.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Q1: What are the admission requirements for applying to college?</Accordion.Header>
                    <Accordion.Body>
                         A1: Admission requirements typically include a completed application form, high school transcripts, standardized test scores (SAT/ACT), letters of recommendation, a personal statement or essay, and an application fee. Specific requirements may vary by college.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Q2: What are your college’s application deadlines?</Accordion.Header>
                    <Accordion.Body>
                        A2: Our application deadlines are August 1 for Early Decision, January 1 for Regular Decision, and March 1 for Transfer Students. Please visit our admissions page for detailed information on requirements and any updates to these dates.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Q3: What technology resources are available to students on campus?</Accordion.Header>
                    <Accordion.Body>
                        A3: Our college offers access to computer labs, high-speed internet, and online library resources. Students can also receive technical support for their devices through our IT services. Additionally, we provide software licenses and virtual learning platforms to enhance academic experiences.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Q4: What majors does your college offer?</Accordion.Header>
                    <Accordion.Body>
                        A4: Our college offers a wide range of majors across various disciplines including business, engineering, humanities, sciences, and more. You can explore specific majors on our website or contact the admissions office for detailed information about available programs, curriculum, and opportunities for specialization
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;