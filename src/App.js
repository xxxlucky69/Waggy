import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Products from './components/Products/Products'
import Form from './components/Form/Form'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'

export default function App() {
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem('cartCount');
    return saved ? parseInt(saved) : 0;
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartCount]);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Navbar cartCount={cartCount}/>
      <Slider/>
      <Products addToCart={addToCart} searchQuery={searchQuery}/>
      <Form/>
      <Gallery/>
      <Footer/>
    </div>}/>

    <Route path='/cart' element={<div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Navbar cartCount={cartCount}/>
      <Footer/>
    </div>}/>
    </Routes>
    
    </BrowserRouter>
  );
}