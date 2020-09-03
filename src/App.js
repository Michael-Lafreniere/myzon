import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Our components:
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
// Sytle:
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// const firebaseConfig = {
//   apiKey: "AIzaSyDtDKSEBAkjT5NS7tFvEVW89W4DvXKEjw4",
//   authDomain: "myzon-3b15e.firebaseapp.com",
//   databaseURL: "https://myzon-3b15e.firebaseio.com",
//   projectId: "myzon-3b15e",
//   storageBucket: "myzon-3b15e.appspot.com",
//   messagingSenderId: "103538183451",
//   appId: "1:103538183451:web:e24c07cf68c63b9a4517be",
//   measurementId: "G-BFCXWKT20X"
// };
