import React from 'react';

//import productImg from '../../assets/piza.jpeg';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';


const ProductCard = (props) => {

const {id, title, image01, price} = props.item;
const disatch = useDispatch() ;  

const addCArt = () => {
    disatch(addItem({
        id, title, image01, price
}))
    console.log(id, title, image01, price)
}



    return (
        <div className='product_item'>
            <div className="product_img">
                <img src={image01} alt="product" className='w-100' />
            </div>
            <div className="product_content">
<h5><Link to={`/foods/${id}`}>{title}</Link></h5>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='product_price'>${price}</span>
                <button className='addCard' onClick={addCArt}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;