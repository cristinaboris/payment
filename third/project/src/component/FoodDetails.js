import React , {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import products from '../UI/product-card/products';
import Helmet from '../pages/Helmet/Helmet';   
import CommonSection from './CommonSection';
import { Container, Row, Col, Collapse } from 'reactstrap';
import productImg from '../assets/burg.jpg';
import './FoodDetails.css'
import ProductCard from '../UI/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const FoodDetails = () => {

const dispatch = useDispatch();

const [tab, setTab] = useState('desc');

const {id}= useParams()

const product = products.find((product)=> product.id === id)

const { title, price ,category, desc, image01} = product;

const [previousImg, setPreviousImg] = useState(product.image01)

const relatedProduct = products.filter((item => category === item.category))

const [enteredName, setEnteredName] = useState('');
const [enteredMAIL, setEnteredMail] = useState('');
const [reviweMsg, setreviewMsg] = useState('')



const addItem = () => {
    dispatch(addItem({
        id, title,price,image01
    }))
}

useEffect(()=>{
    setPreviousImg(product.image01)
},[product])

useEffect(()=>{
    window.scrollTo(0,0)
},[product])


const submitHandle = (e) =>{
    e.preventDefault();
    console.log(enteredName,enteredMAIL,reviweMsg)
}

    return <Helmet title='Cart'>
<CommonSection title={title}/>
<section>

<Container>
<Row>
    <Col lg='2' md='2' className='d-flex'>
<div className="product_img">
    <div className="img_item" onClick={()=> setPreviousImg(product.image01)}>
    <img src={product.image01} className='w-50' />
    </div>
    <div className="img_item" onClick={()=> setPreviousImg(product.image02)}>
    <img src={product.image02} className='w-50' />
    </div>
    <div className="img_item" onClick={()=> setPreviousImg(product.image03)}>
    <img src={product.image03} className='w-50' />
    </div>
</div></Col>
<Col lg='4' md='4'>
    <div className="product_main_img">
<img src={previousImg} alt="" className='w-100'/>


    </div>
</Col>
    
    <Col lg='6' md='6'>
<div className="single_product">
    <h1 className='title'>{title}</h1>
    <span className='price text-warning'>${price}</span>
    <p className='category mb-4'>Category: <span>{category}</span></p>
    <button onClick={addItem} className='btn bg-warning'>Add to Cart</button>
</div>
    </Col>
    <Col lg='12'>
        <div className="tabs d-flex align-items-center gap-5 py-2">
<h6 className={` ${tab === 'desc' ? 'tab_active' : ''} `} onClick={() => setTab('desc')}>Description</h6>
<h6 onClick={() => setTab('rev')} className={` ${tab === 'rev' ? 'tab_active' : ''} `}>Review</h6>
</div>
{
    tab === 'desc' ?  <div className="tab_contend">
    <p>{desc}</p>
</div> : <div className="tab_form mb-3">
<div className="review">
    <p className="user_name mb-0">
Jonh
    </p>
    <p className='user_email'>Monfhdh@gmail.com</p>
    <p className='feed'>Gread products</p>
</div>
<div className="review">
    <p className="user_name mb-0">
Jonh
    </p>
    <p className='user_email'>Monfhdh@gmail.com</p>
    <p className='feed'>Gread products</p>
</div>
<div className="review">
    <p className="user_name mb-0">
Jonh
    </p>
    <p className='user_email'>Monfhdh@gmail.com</p>
    <p className='feed'>Gread products</p>
</div>
 <form className='form' onSubmit={submitHandle}>
<div className="form_group">
    <input type="text" placeholder='enter your name' onChange={(e)=> setEnteredName(e.target.value)} required/>
</div>
<div className="form_group">
    <input type="text" placeholder='enter your email'onChange={(e)=> setEnteredMail(e.target.value)} required/>
</div>
<div className="form_group">
    <textarea rows='5' type="text" placeholder='enter your name' onChange={(e)=> setreviewMsg(e.target.value)} required/>
</div>

<button type='submit' className='addToCard'>Submit</button>
 </form>
    </div>
}

       
    </Col>

    <Col lg='12' className='mb-5'>

        <h2 className='related'>You might also like</h2>
        </Col>
        {
            relatedProduct.map(item =>(
                <Col lg='3' md='4' xs='6' key={item.id}>

                    <ProductCard item={item}/>
                </Col>
            ))
        }
    
</Row>

</Container>

    </section>

    </Helmet>
};

export default FoodDetails;