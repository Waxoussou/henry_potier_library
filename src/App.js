import React from 'react';
import Books from './Components/Books';
import CartModal from './Components/CartModal';
import './App.css';

function App() {

  return (
    <div className="App">
      <CartModal />
      <Books />
    </div>
  );
}

export default App;
