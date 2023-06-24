import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { userContext, UserProvider } from '../../contexts/user.context';

import './navigation.styles.scss';
import { signInUser } from '../../utils/firebase/firebase.utils';
import { async } from 'q';
import { signOutMethod } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { CartContext } from '../../contexts/cart.context';
import { useSelector } from 'react-redux';
import { isCartOpenSelector } from '../../store/cart/cart.selector';


const Navigation = () => {
  const {currentUser} = useContext(userContext)
  const isCartOpen = useSelector(isCartOpenSelector)
  console.log(currentUser)

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <Link className='nav-link' to={"/auth"} onClick={signOutMethod} >Sign Out
              </Link>
            ): (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon />
        </div>
        {
          isCartOpen && 
          <CartDropdown />
        }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
