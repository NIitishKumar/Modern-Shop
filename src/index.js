import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/shop.context';
import { CartProvider } from './contexts/cart.context';
import { AddToCartProvide } from './contexts/add-to-cart.context';
import {Provider} from "react-redux"
import { persistor, store } from './store/store';
import { PersistGate } from "redux-persist/es/integration/react"

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <UserProvider> */}
            <CartProvider>
              <AddToCartProvide>
                <PersistGate
                  loading={<h1>Loading...</h1>}
                  persistor={persistor}
                >
                  <App />
                </PersistGate>
              </AddToCartProvide>
            </CartProvider>
        {/* </UserProvider> */}
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
