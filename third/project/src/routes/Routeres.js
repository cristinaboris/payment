import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../component/Home';
import AllFoods from '../component/AllFoods';
import FoodDetails from '../component/FoodDetails';
import Cart from '../component/Cart';
import Checkout from '../component/Checkout';
import Contact from '../component/Contacts';
import Login from '../component/Login';
import Register from '../component/Register'

const Routeres = () => {
    return( 
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods' element={<AllFoods/>}/>
        <Route path='/foods/:id' element={<FoodDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    )
};

export default Routeres;