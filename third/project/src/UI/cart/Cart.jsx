import React from 'react';
import {ListGroup} from 'reactstrap'
import CartItem from '../cart/CartItem'
import { Link } from 'react-router-dom';
import './Cart.css'
import { toggle } from '../../store/cartUiSlice';
import {items, totalSumAlll} from '../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {




    const dispatch = useDispatch();
    const close = () => {
        dispatch(toggle())
    }


const cartProduct = useSelector(items)
const totalSumAll = useSelector(totalSumAlll)

    return (
        
        <div className="cart_conteiner">
            <ListGroup className='cart'>
<div className="cart_close">
    <span><i class="ri-close-circle-line" onClick={close}></i></span>
</div>
<div className="cart_item_list">

    {
        cartProduct.length === 0 ? <h6 className='text-center mt-5'>No item added to card</h6> :
    cartProduct.map((item, id)=> (
        <CartItem item={item} key={id}/>
    ))
    }
    

</div>

<div className="cart_bottom d-flex justify-content-between justify-items-center">
    <h6>Total amound: <span>{totalSumAll} $</span></h6>
    <button><Link to='/checkout'>Checkout</Link></button>
</div>
            </ListGroup>
        </div>
    );
};

export default Cart;