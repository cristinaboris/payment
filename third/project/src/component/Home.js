import React from 'react';
import Helmet from './../pages/Helmet/Helmet';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import heroImg from './../assets/dostavka.png'
import { Link } from 'react-router-dom';
import './Home.css'
import Category from '../UI/category/Category';

import delivery from './../assets/delivery.png'
import delivery1 from './../assets/delivery1.png'
import delivery2 from './../assets/delivery2.jpg'

import products from '../UI/product-card/products.js';

import  foodCategory1 from '../assets/burg.jpg';
import  foodCategory2 from '../assets/pizzaaa.png';
import  foodCategory3 from '../assets/saladd.jpg';
import ProductCard from '../UI/product-card/ProductCard';
import {useState,useEffect} from "react";
import whyImg from '../assets/why.png';
import networking from '../assets/network.jpg';
import SliderNew from '../UI/SliderNew';


const featureData = [
    {
        title:'Quick Delivery',
        imgUrl: delivery,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum ad saepe quos iure eum'        
    },
    {
        title:'Super Dine In',
        imgUrl: delivery1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum ad saepe quos iure eum'        
    },
    {
        title:'Easy Pick Up',
        imgUrl: delivery2,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum ad saepe quos iure eum'        
    }
]


const Home = () => {


const [hotPizza , setHitPizza] = useState([]);

const [category, setCategory] = useState('ALL');

const [filtering, setFiltering] = useState(products);

useEffect(()=>{
  const filterPizza = products.filter((item)=> item.category === 'Pizza');
  const slicePizza = filterPizza.slice(0,4);
  setHitPizza(slicePizza)
},[])

 useEffect(() => {

if(category == "ALL"){
   setFiltering(products);
}
if(category === 'BURGER'){
    const filterAll = products.filter((item)=> item.category === 'Burger')
    setFiltering(filterAll);
}
if(category === 'PIZZA'){
    const filterAll = products.filter((item)=> item.category === 'Pizza')
    setFiltering(filterAll);
}
if(category === 'BREAD'){
    const filterAll = products.filter((item)=> item.category === 'Bread')
    setFiltering(filterAll);
}

 },[category])




    return <Helmet title='Home'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_container pt-20">
 <h6 className='mb-10'>Easy way to make an order</h6>
 <h1 className='hero_title mb-4'><span>HUNGRY?</span> Just wait
 <br/> food at<span> your door</span></h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum ad saepe quos iure eum?</p>
 <div className="hero_btn d-flex align-items-center mt-4 gap-5">
    <button className='order_btn d-flex align-items-center justify-content-between'>Order now! <i class="ri-arrow-left-up-line"></i></button>
    <button className='all_foods_btn '><Link to='/foods'>See all foods</Link></button>
 </div>
 <div className=' hero_service d-flex align-items-center gap-5 mt-5'>
    <p className='d-flex align-items-center gap-4'><span className='shipping'><i class="ri-car-line"></i></span>No shipping charge</p>
    <p className='d-flex align-items-center gap-4'><span className='shipping'><i class="ri-spy-line"></i></span>100% secure checkout</p>
 </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                         <div className="hero_img">
                           <img src={heroImg} alt="heroImg" />

                         </div>
                    </Col>
                </Row>
            </Container>
        </section>
<section className='pt-0'>
    <Category/>
</section>
<section>
    <Container>
        <Row>
            <Col lg='12' className='text-center'>

<h5 className='feature_subtitle mb-4'>What we serve</h5>
<h2 className='feature_title'>Just sit back at home</h2>
<h2 className='feature_title'>we will <span>take care </span></h2>

<p className='mb-1 mt-3 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias corrupti consectetur voluptatum, maiores necessitatibus.</p>

<p className='feature_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, similique.</p>

            </Col>

            {featureData.map((item, index)=> (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                <div className="feature_item text-center p-5 px-5 py-5">
<img src={item.imgUrl}  className='mb-5'/>
<h5 className='fw-bold mb-3'>{item.title}</h5>
<p>{item.desc}</p>
                </div>
            </Col>
            ))}
            
            <Col lg='4' md='4'>
            </Col>
            <Col lg='4' md='4'>
            </Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row>

            <Col lg='12'className='text-center'>
                <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>


                {/* при нажатие на кнопку -выделяется */}
                <div className="categore_food d-flex align-items-center justify-content-center gap-5">
                    <button className={`all_btn ${category === 'ALL' ? 'foodActiveBt' :'' }`} onClick={()=>setCategory('ALL')}>All</button>
                    <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodActiveBt' :''}`} onClick={()=>setCategory('PIZZA')}><img src={foodCategory2} alt="" />Pizza</button>
                    <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ?'foodActiveBt' :''}`} onClick={()=>setCategory('BURGER')}><img src={foodCategory1} alt="" />Burger</button>
                    <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ?'foodActiveBt' :''}`}onClick={()=>setCategory('BREAD')}><img src={foodCategory3} alt="" />Salad</button>
                </div>
            </Col>


            {
                  filtering.map((item)=>(
                  <Col lg='3' md='4'sm='6' xs='12' key={item.id} className='check mt-5'>

                    <ProductCard item={item}/>

                  </Col>
                  ))
                }
            
        </Row>
    </Container>
</section>
<section className='why_choose'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <img src={whyImg} alt="why" className='w-100' />
            </Col>

            <Col lg='6' md='6' >
            <div className="why_tasty mt-50">
     <h2 className="why_tasty__treat mb-4">Why <span>Tasty Treat?</span></h2>
    
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ducimus iure, quisquam hic eaque esse molestias odio cum officiis doloribus non autem eveniet magni minima nisi sint vel repellendus. Maiores.</p>
           <ListGroup className='mt-6'>
            <ListGroupItem className='border-0 ps-0' >
           <p className='icon d-flex align-items-center gP-2'> <i class="ri-checkbox-circle-line"></i>
            Fresh and Tasty</p>
            <p className='tasty-treat_desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, adipisci!</p>
            </ListGroupItem>
            <ListGroupItem className='border-0 ps-0'>
            <p className='icon d-flex align-items-center gP-2'><i class="ri-checkbox-circle-line"></i>
            Quality support</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum vitae esse nulla.</p>
            </ListGroupItem>
            <ListGroupItem className='border-0 ps-0'>
            <p className='icon d-flex align-items-center gP-2'><i class="ri-checkbox-circle-line"></i>
           Order from any location</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </ListGroupItem>
           </ListGroup>
           
           
            </div>
            </Col>

        </Row>
    </Container>
</section>
<section className='pt-0'>
<Container>
<Row>
    <Col lg='12' className='text-center mb-5'>
        <h2>Hot pizza</h2>
    </Col>
    {
        hotPizza.map((item)=>(
            <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                <ProductCard item={item}/>
            </Col>
        ))
    }
</Row>
</Container>
</section>
<section>
    <Container>
        <Row >
            <Col lg='6' md='6' className='mt-5'>
            <div className="testimonial">
                <h5 className='testimonial_sub mb-4'>Testimonial</h5>
                <h2 className='testimonial_title mb-4'>What our <span>customer</span> are sayning</h2>
                <p className='testimonial_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore, eius quos magni pariatur laboriosam.</p>

                <SliderNew/>
                </div>
            </Col>
            <Col lg='6' md='6' className='mt-5'>
                <div className="">
                <img src={networking} alt="networking" className='w-100'/>
                </div>
            </Col>
        </Row>
    </Container>
</section>
    </Helmet>
};

export default Home;