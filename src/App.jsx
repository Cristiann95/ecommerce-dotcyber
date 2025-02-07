import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useContext } from 'react';
import CartContext from './context/cartContext';
import "toastify-js/src/toastify.css"


function App() {

  const { cart } = useContext(CartContext)

  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/search" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={(cart.length === 0) ? <Cart /> : <Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
