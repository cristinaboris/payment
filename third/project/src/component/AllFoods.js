import React , {useState, useEffect} from 'react';
import Helmet from '../pages/Helmet/Helmet';
import CommonSection from './CommonSection';
import {Container, Row, Col} from 'reactstrap'

import products from '../UI/product-card/products'
import ProductCard from '../UI/product-card/ProductCard';
import './AllFoods.css';
import ReactPaginate from 'react-paginate';


const AllFoods = () => {

const [searchTerm , setSeatch ] = useState('');



/* ------------------------------------------------ pagination */
const [page , setPage] = useState(0);

const productPage = 8;
const visiblePage = page * productPage;
const displayPage = products.slice(visiblePage, visiblePage + productPage)

const pageCont = (products.length /  productPage)

const changePages = ({selected}) => {
    setPage(selected)
}
    return (
       <Helmet title= "All foods">

<CommonSection title='all-foods'/>
<section>
<Container>

<Row>

    <Col lg='6' md='6' sm='6' xs='12'>
    <div className="searching d-flex align-items-center justify-content-between w-50">
        <input value={searchTerm} onChange={(e) =>setSeatch(e.target.value)} type="text" placeholder='Searching' />
    <span> 
        <i class="ri-search-line"></i>
        </span>
    </div>
    </Col>
    <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
    <div className="sorting text-end w-30" >
        <select className='w-100'>
            <option value="">Defauld</option>
            <option value='ascending'>Alphabet, A-z</option>
            <option value="decending">Alphabet, Z-a</option>
            <option value="hight-price">Hight Price</option>
            <option value="low-price">Low Price</option>
        </select>
    </div>
    </Col>
    

{
    displayPage.filter((item)=> {
        if(searchTerm.value === '') return item;
        
        if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return item;
    })
    .map((item)=> (
        <Col lg='3' md='4' sm='6' xs="6" key={item.id} className='mb-4 '> 
        <ProductCard item={item} /></Col>
    ))
}
<div></div>
</Row>

<ReactPaginate
pageCount={pageCont}
onPageChange={changePages}
previousLabel='<'
nextLabel='>'
containerClassName='pagination'/>
</Container>

</section>

       </Helmet>
    );
};

export default AllFoods;