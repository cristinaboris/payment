import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routeres from '../../routes/Routeres';
import Cart from '../../UI/cart/Cart';
import { useSelector } from 'react-redux';
import {visibleCart} from '../../store/cartUiSlice'


const Layout = () => {

    const visibleCartOne =useSelector(visibleCart)
    return (
        <div>
            <Header/>


            {
                visibleCartOne && <Cart/>
            }
            
            <div>
                <Routeres/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;