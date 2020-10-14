import React from 'react';
import ReactDOM from 'react-dom';
import CartState from './context/cart/CartState';
import BookState from './context/book/BookState';
import InfoState from './context/info/InfoState';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BookState>
      <CartState>
        <InfoState>
          <App />
        </InfoState>
      </CartState>
    </BookState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
