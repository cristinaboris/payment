import React from 'react';
import CommonSection from './CommonSection';
import Helmet from '../pages/Helmet/Helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row,Col } from 'reactstrap';
import './Cart.css'
import { items } from '../store/cartSlice';
import {deleteItem} from './../store/cartSlice';
 import {totalSumAlll} from './../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartItems = useSelector(items)

    const totalAmount = useSelector(totalSumAlll)

    return (
        <div>
            <Helmet title=' Cart'>
            <CommonSection title='Your Cart'/>
            <section>
            <Container>
<Row>
    <Col lg='12'>
{
    cartItems.length === 0 ? <h5 className='text-center'>Your cast is empty</h5> : <table className='table table-bordered'>
    <thead>
        <tr>
            <th className='text-center'>Image</th>
            <th className='text-center'>Product Title</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Quantity</th>
            <th className='text-center'>Delete</th>
        </tr>
    </thead>
    <tbody>
        {cartItems.map(item => (
           < Tr item = {item} key={item.id}/>
        ))}
    </tbody>
</table>
}
<div className='mt-5'>
    <h6 className='subtotal'>Subtotal: <span>${totalAmount}</span></h6>
    <p>Taxes and shopping in price</p>
    <div className="cart_page">
        <Link to='/foods'>
        <button className='addToCard me-4' >Add to home</button>
        </Link>
        <Link to='/checkout'>
        <button className='addToCard' >Proceed to chekout</button>
        </Link>
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


const Tr = (props) =>{
    
const {id, image01, title, price, quanity } = props.item;
const dispatch = useDispatch();
const deleteItems  = () =>{
    dispatch(deleteItem(id))
}

    return <tr>
    <td className='text-center cart_img'><img src={image01}/></td>  
    <td className='text-center'>{title}</td> 
    <td className='text-center'>{price}</td>         
    <td className='text-center'>{quanity}</td> 
    <td className='text-center delete' onClick={deleteItems}><i class="ri-close-line"></i></td> 
    </tr>
}

export default Cart;