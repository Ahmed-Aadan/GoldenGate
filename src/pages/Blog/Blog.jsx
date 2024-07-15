import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Discover your path to success in Somalia with Golden Gate University. Our practical, industry-focused programs are designed for working professionals, offering flexible schedules and online options. Benefit from our strong Bay Area connections and experienced faculty who bring real-world insights to your education. Join a diverse community and gain the skills needed to thrive in business, law, accounting, and technology. Start shaping your future today at Golden Gate University.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Located in Mogadishu, Somalia, Golden Gate University offers specialized programs tailored for professionals seeking career advancement. With flexible scheduling options and a supportive community, our faculty—comprised of industry experts—ensure a relevant and impactful educational experience. Benefit from our strong industry connections and comprehensive career services, empowering you to excel in fields like business, law, accounting, and technology. Start your journey to success with Golden Gate University today.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Welcome to Golden Gate University, where practical education meets professional success. Located in Somalia, our programs cater to working professionals with flexible schedules and online learning options. Benefit from our industry-experienced faculty, extensive networking opportunities, and personalized career services. Whether your pursuing business, law, accounting, or technology, GGU equips you with the skills and connections to thrive in your career. Join a vibrant community of motivated learners and discover your path to achievement at Golden Gate University'
    },
   
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>Welcome to Golden Gate University, where academic rigor meets real-world relevance. Explore our dynamic programs in business, law, and technology, designed to prepare you for career success. Our downtown San Francisco location provides unparalleled opportunities for networking and professional growth. At Golden Gate, you'll find a supportive community of faculty and peers dedicated to your educational journey. Discover your path to excellence with us at Golden Gate University..</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;