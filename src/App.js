// App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content /><hr></hr>
      <AboutMe /><hr></hr>
      <Projects /><hr></hr>
      <Contact /><hr></hr>

      <Resume/>
      <Footer/>
    </div>
  );
};

export default App;
