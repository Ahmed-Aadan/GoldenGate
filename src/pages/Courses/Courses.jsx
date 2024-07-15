import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: 'Welcome to the Art Course! Immerse yourself in the study of art history, techniques, and creative expression. Perfect for aspiring artists and enthusiasts, this course offers the skills and knowledge to develop your artistic abilities and appreciation for visual arts.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Welcome to the Business Course! Gain insights into key business concepts, strategies, and management practices. Ideal for aspiring entrepreneurs and professionals, this course equips you with the skills and knowledge to navigate and succeed in the dynamic world of business.'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'Welcome to the Computer Science Course! Explore the fundamentals of programming, algorithms, and system design. Perfect for aspiring developers and tech enthusiasts, this course provides the essential skills and knowledge to excel in the ever-evolving field of computer science.'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Welcome to the Education Course! Dive into the foundations of teaching and learning, explore innovative strategies, and develop skills to inspire and engage students. Whether you’re a future educator or seeking professional growth, this course offers essential tools and knowledge for success in the dynamic field of education.'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: 'Welcome to the Healthcare Course! Discover the essentials of patient care, medical ethics, and healthcare systems. Designed for aspiring healthcare professionals, this course equips you with the knowledge and skills needed to excel in the dynamic and vital field of healthcare.'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: 'Welcome to the Law Course! Explore the foundations of legal systems, gain insight into various branches of law, and develop critical thinking and analytical skills. Ideal for aspiring lawyers and legal professionals, this course provides essential knowledge and practical tools to navigate the complex world of law and justice.'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Welcome to the Music Course! Explore the fundamentals of music theory, history, and performance. Whether youre a budding musician or a seasoned performer, this course offers essential techniques and insights to enhance your musical journey and creativity.'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Explore sports management, psychology, nutrition for athletes, sports medicine, and exercise physiology. Enhance your knowledge and skills in sports-related fields at Golden Gate University. Discover more about these courses and how they can shape your career in sports and fitness.'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Discover our comprehensive range of courses designed to meet your academic and professional goals. From business and technology to healthcare and liberal arts, our courses offer practical skills and expert guidance to support your success.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;