// App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content /><hr></hr>
      <AboutMe /><hr></hr>
     
      <Contact /><hr></hr>

     
      <Footer/>
    </div>
  );
};

export default App;
