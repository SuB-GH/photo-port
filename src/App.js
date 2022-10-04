//This is the main file of the application. To effect any change on the application, we need to either modify this file or add components inside it.
//need to import React in every component file
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
