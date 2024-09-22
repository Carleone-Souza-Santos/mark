import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import Home from './pages/Home';
import Cart from './components/Cart';
import Boleto from './pages/Boleto';
import Pix from './pages/Pix';
import Cartao from './pages/Cartao';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Produto 1', price: 19.99 },
    { id: 2, name: 'Produto 2 ', price: 29.99 },
    { id: 3, name: 'Produto 3', price: 39.99 },
    { id: 4, name: 'Produto 4 ', price: 19.99 },
    { id: 5, name: 'Produto 5', price: 29.99 },
    { id: 6, name: 'Produto 6', price: 49.99 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="p-4">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/pagamento-boleto" element={<Boleto />} />
          <Route path="/pagamento-cartao" element={<Cartao />} />
          <Route path="/qr-code" element={<Pix />} />
        </Routes>
      </div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="fixed bottom-5 right-4 bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      >
        +
      </button>
      <AddProduct
        addProduct={addProduct}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </Router>
  );
};

export default App;
