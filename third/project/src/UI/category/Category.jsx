import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import categoryImg01 from '../../assets/categoryImg01.png';
import categoryImg02 from '../../assets/categoryImg02.png';
import categoryImg03 from '../../assets/categoryImg03.jpeg';
import categoryImg04 from '../../assets/categoryImg04.jpeg';
import './Category.css'

const categoryData = [
    {
        display: 'FastFood',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Asia Food',
        imgUrl: categoryImg03
    },
    {
        display: 'Row meat',
        imgUrl: categoryImg04
    }
]

const Category = () => {
    return <Container>
<Row>
{
    categoryData.map((item, index)=>(
        <Col lg='3' md='6' sm='6' xs='6'>
<div className="category_item d-flex align-items-center gap-3">
<div className="category_img">
    <img src={item.imgUrl} alt='category_item' />
</div>
<h6>{item.display}</h6>

</div>
        </Col>
    ))
}

    <Col lg='3' md='4'></Col>
</Row>
    </Container>
};

export default Category;