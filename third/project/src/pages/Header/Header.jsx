import React , {useEffect} from 'react';
import {Container} from 'reactstrap';
import logo from '../../assets/food.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useRef } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {totalQuanity} from '../../store/cartSlice'
import { toggle } from '../../store/cartUiSlice';

const Header = () => {

 const nav_links =[
    {display: 'Home',
     path: './home'   
},
    {display: 'Foods',
     path: './foods'   
},   {display: 'Cart',
    path: './cart'   
},   {display: 'Contact',
    path: './contact'   
}
 ]   

 // фиксд меню

useEffect(()=>{
window.addEventListener('scroll', ()=> {

if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){

headerRed.current.classList.add('header_shrink')
}
else{
    headerRed.current.classList.remove('header_shrink')
}
})
 return()=> window.removeEventListener('scroll', null)
 
}, [])


const headerRed = useRef(null);

 const menuRef = useRef(null);
 const toggleMenu = () => menuRef.current.classList.toggle('show_menu');


const disaptch = useDispatch();
const toggleCart = () => {
    disaptch(toggle())
}


const totalQuanityOne = useSelector(totalQuanity)



    return (
       <header className='header' ref={headerRed}>
<Container>
<div className='nav_wrapper d-flex align-items-center justify-content-between '>
    <div className='logo'>
        <img className='logo' src={logo} alt="logo" />
    </div>


{/* ---------------------------menu----------------------------------*/}


<div className="navigation" ref={menuRef} onClick={toggleMenu}>
    <div className="menu d-flex align-items-center gap-5">
  {/* нажатие на меню!!!!!!!!!!  */ }
{ nav_links.map((obj, index) =>(

    <NavLink  
    
    to={obj.path} key={index}



    className={ navClass12 => navClass12.isActive ? 'active__menu' : ''}
    
    >{obj.display}</NavLink>)
)}

    </div>
</div>
{/*   icons right   */}
<div className="nav-right d-flex align-items-center gap-4">
    <span className="cart_icon" onClick={toggleCart}> 
    <i class="ri-shopping-cart-line"></i>
    <span className="badge">{totalQuanityOne}</span></span>
    <span className="user">
        <Link to='/login'>
    <i class="ri-user-line"></i></Link>
    </span>
    <span className="mobile_menu" onClick={toggleMenu}>
    <i class="ri-menu-line"></i>
    </span>
    
</div>
</div>
</Container>

       </header>

    );
};

export default Header;
