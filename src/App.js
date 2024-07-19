import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
// import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Menu />
      <Footer />
      {/* <BookingForm /> */}
    </>
  );
}

export default App;
