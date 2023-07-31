import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Container, Row,Col } from 'reactstrap';
import CommonSection from './CommonSection';
import Helmet from '../pages/Helmet/Helmet';
import './Checkout.css';
import {totalSumAlll} from './../store/cartSlice'

const Checkout = () => {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [number, setNumber] = useState('');
const [coutry, setCounty] = useState('');
const [city, setCity] = useState('');
const [code, setCode]= useState('');


const shippingInfo = []

const submitHandle = (e) =>{
e.preventDefault()
const userShipping = {
    name: name,
    email: email,
    phone: number,
    coutry: coutry,
    ciry: city,
    postalCode: code
}
shippingInfo.push(userShipping)
console.log(shippingInfo)
}

const cartTotala = useSelector(totalSumAlll)
const shippingCost = 30;

const totalAmount = cartTotala + Number(shippingCost);

    return (
        <div>
            <Helmet title='checkout'>
           <CommonSection title='Checkout'/>
           <section>
            <Container>
                <Row>
                    <Col lg='8' md='6' >
                        <h6 className='mb-4'>Shipping Adress</h6>
                        <form className='checkout_form' onSubmit={submitHandle}>
                         <div className="form_group">
                          <input type="text" placeholder='Enter your name' required onChange={(e) => setName(e.target.value)}/>
                         </div>
                         <div className="form_group">
                          <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)}/>
                         </div>
                         <div className="form_group">
                          <input type="number" placeholder='Phone number' required onChange={(e) => setNumber(e.target.value)}/>
                         </div>
                         <div className="form_group">
                          <input type="text" placeholder='Country' required onChange={(e) => setCounty(e.target.value)}/>
                         </div>
                         <div className="form_group">
                          <input type="text" placeholder='City' required onChange={(e) => setCity(e.target.value)}/>
                         </div>
                         <div className="form_group">
                          <input type="number" placeholder='Postal code' required onChange={(e) => setCode (e.target.value)}/>
                         </div>
                         <button className='add'>PAYMENT</button> 
                         </form>
                         
                 </Col>
                    <Col lg='4' md='6' >
                        <div className="checkout">
                            <h6 className='d-flex align-items-center justify-content-between'>Subtotal: <span>${cartTotala}</span></h6>
                            <h6 className='d-flex align-items-center justify-content-between'>Shipping: <span>${shippingCost}</span></h6>
                            <div className="checkout_end">
                                <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
           </section>
           </Helmet>
        </div>
    );
};

export default Checkout;