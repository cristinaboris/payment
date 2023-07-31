import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../pages/Helmet/Helmet';
import CommonSection from './CommonSection';
import './Login.css'



const Login = () => {

const loginRef = useRef();
const passwordRef = useRef();

const submitHandle = e =>{
  e.prevendDefault()
}


    return (
        <div> 
            <CommonSection title='Login'/>
            <Helmet title='Login'>
<section>
    <Container>
        <Row>
            <Col lg='6'  md='6' sm='12' className='m-auto text-center'>
                <form action="" className='form mb-5' onSubmit={submitHandle}>
<div className="form_group">
    <input type="email" placeholder='email' ref={loginRef} required/>
</div>
<div className="form_group">
    <input type="text" placeholder='password' ref={passwordRef} required/>
</div>
<button typr='submit' className="addTo">LOGIN</button>
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

export default Login;