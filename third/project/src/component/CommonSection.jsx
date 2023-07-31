import React from 'react';
import { Container } from 'reactstrap';
import './CommonSection.css'




const CommonSection = (props) => {
    return (
        <section className='common_section'>

<Container>

    <h2 className='text-white'>{props.title}</h2>
</Container>
        </section>
    );
};

export default CommonSection;