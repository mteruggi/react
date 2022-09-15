
import Header from './layout/header/Header';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer'
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  useEffect(() => {
    console.log('mensaje de prueba app')

}, []);
  return (
    <div className="App">
      <Header />
      <Body />
      
      <Footer lastName="pepe" bgColor="red"/>
    </div>
  );
}

export default App;
