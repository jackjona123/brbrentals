import React from 'react';
import './App.css';
// import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/">
            <SearchPage />
          </Route>
          <Route path='/' component={() => { 
            window.location.href = 'http://localhost:3001'; 
            return null;
          }}/>
          {//Comment above and uncomment below to show old homepage
          /* 
          <Route path="/">
            <Home />
          </Route>
          */}
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
