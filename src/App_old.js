import React from 'react';
import logo from './logo.svg';
import MENU_DATA from './menu.data';
import { addCollectionAndDocuments } from './firebase.utils';
import './App.css';

function App() {
  // addCollectionAndDocuments('menu', MENU_DATA);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
