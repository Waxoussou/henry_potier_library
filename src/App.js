import React from 'react';
import Books from './Components/Books';
import CartState from './context/cart/CartState';
import BookState from './context/book/BookState';

import './App.css';

function App() {

  return (
    <BookState>
      <CartState>
        <div className="App">
          <Books />
        </div>
      </CartState>
    </BookState>
  );
}

export default App;
