import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../pages/Helmet/Helmet';
import CommonSection from './CommonSection';
import './Login.css'



const Register = () => {

const signuRef = useRef();
const signuRefdRef = useRef();
const signEmail = useRef()

const submitHandle = e =>{
  e.prevendDefault()
}


    return (
        <div> 
            <CommonSection title='Register'/>
            <Helmet title='Register'>
<section>
    <Container>
        <Row>
            <Col lg='6'  md='6' sm='12' className='m-auto text-center'>
                <form action="" className='form mb-5' onSubmit={submitHandle}>
<div className="form_group">
    <input type="text" placeholder='Full Name' ref={signuRef} required/>
</div>
<div className="form_group">
    <input type="text" placeholder='password' ref={signuRefdRef} required/>
</div>
<div className="form_group">
    <input type="text" placeholder='password' ref={signEmail} required/>
</div>
<button typr='submit' className="addTo">Sing Up</button>
                </form>
                
                <Link to='/register'>Already have an accound? Create an account!</Link>
            </Col>
        </Row>
    </Container>
</section>
            </Helmet>
        </div>
    );
};


export default Register;