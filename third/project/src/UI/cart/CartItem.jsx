import React from 'react';
import { useDispatch } from 'react-redux';
import {ListGroupItem} from 'reactstrap'
import productImg from '../../assets/product_04.jpg'
import './CartItem.css'
import { addItem, removeItem, deleteItem } from '../../store/cartSlice';


const CartItem = ({item}) => {

const {id, title, price, image01, quanity, totalPrice} = item

const dispatch = useDispatch()

const incrementItem = () => {
    dispatch(addItem({
        id,
        title, 
        price,
        image01
    }))
}

const decrease = () => {
    dispatch(removeItem(id))
}

const deleteItems = () => {
    dispatch(deleteItem(id))
}


    return <ListGroupItem className='border-0 cart_item'>

        <div className="cart_item_desc d-flex gap-2">
        
            <img src={image01} alt="" />

        <div className="cart_product_info w-100 d-flex  align-items-center gap-4 justify-content-between" >
            <div className="">
                <h6 className='cart_ptoduct_title'>{title}</h6>
                <p className='d-flex align-items-center gap-4 cart_product_price'>
                    {quanity}x <span>{totalPrice} $</span></p>
                <div className="d-flex align-items-center justify-content-between cart_item_button">
                    <span><i class="ri-add-box-line" onClick={incrementItem}></i></span>
                    <span>{quanity}</span>
                    <span><i class="ri-subtract-line" onClick={decrease}></i></span>
                </div>
            </div>
            <span className='delete' onClick={deleteItems}><i class="ri-close-line"></i></span>
        </div>
        </div>

    </ListGroupItem>
};

export default CartItem;