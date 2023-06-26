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
import { useDispatch, useSelector } from 'react-redux';
import { isCartOpenSelector } from '../../store/cart/cart.selector';
import { user } from '../../store/user/user-selector';
import { signOutAction } from '../../store/user/user-action';


const Navigation = () => {
  const currentUser = useSelector(user);
  const dispatch = useDispatch();
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
            currentUser?.id ? (
              <Link className='nav-link' to={"/auth"} onClick={() => { dispatch(signOutAction())}} >Sign Out
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
