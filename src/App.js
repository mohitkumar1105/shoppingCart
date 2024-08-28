import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Payment } from './Pages/Payment';





function App() {

  return (

    <div >
      

      <Navbar />
      
     

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>


    </div>


  );
}

export default App;
