import React from 'react';
import {Container, Row, Col, ListGroupItem, ListGroup} from 'reactstrap';
import logo from '../../assets/food.png';
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
<Row>
    <Col lg='3' md='4' sm='6'>
    <div className='logo footer_logo text-start'>
        <img className='logo' src={logo} alt="logo" />
        <h4>Tasty!</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque molestias?</p>
    </div>
    </Col>
    <Col lg='3' md='4' sm='6'>
        <h4>Delivery time</h4>
        <ListGroup className='delivery_time_list' ><ListGroupItem className='deliver_time border-0 ps-0'>
           <span> Sunday-Thrusday</span>
            <p>10:00 am - 11:00 pm</p>
            </ListGroupItem></ListGroup>
            <ListGroup className='delivery_time_list'><ListGroupItem className='deliver_time deliver_day border-0 ps-0'>
           <span> Friday-Saturday</span>
            <p>Off day</p>
            </ListGroupItem></ListGroup>
    </Col>
    <Col lg='3' md='4' sm='6'>
    <h4>Contact</h4>
        <ListGroup className='delivery_time_list' ><ListGroupItem className='deliver_time border-0 ps-0'>
           <span>Phone + 380 96 306 6013</span>
            </ListGroupItem></ListGroup>
            <ListGroup className='delivery_time_list'><ListGroupItem className='deliver_time deliver_day border-0 ps-0'>
           <span>Email: mailForWriting@ukr.net</span>
            </ListGroupItem></ListGroup>
            <ListGroup className='delivery_time_list'><ListGroupItem className='deliver_time deliver_day border-0 ps-0'>
           <span>Location: Kiev street Montre</span>
            </ListGroupItem></ListGroup>
    </Col>
    <Col lg='3' md='4' sm='6'>
<h5 className="delivery_time_list">NewsLetter</h5>
<p>Subscribe our NewsLettet</p>
<div className="NewsLetter">
 <input type='email' placeholder='enter youre email'/>
 <span>
 <i class="ri-send-plane-line"></i></span>
</div>
    </Col>
</Row>

<Row className='mt-5 '>
    <Col lg='8' md='6' >
<p className='copy'>Copyright - 2022, website made by Khrystyna Borys</p>
    </Col>
    <Col lg='8' md='6' >
<div className="social d-flex align-items-center justify-content-end gap-4">
    <p className='m-0'>Follow:</p>
    <span>
        <Link to='https://www.facebook.com/'><i class="ri-facebook-line"></i>
</Link>
    </span>
    <span><Link to='/'><i class="ri-github-line"></i></Link></span>
    <span><Link to='/'><i class="ri-youtube-line"></i></Link></span>
    
</div>
    </Col>
</Row>


            </Container>
        </div>
    );
};

export default Footer;