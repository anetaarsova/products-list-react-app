
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
    <Router>

    <Header/>
      <div className="p-3"></div>
      <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/about">
           <About/>
         </Route>
         <Route path="/products/:id">
           <Product/>
         </Route>
      </Switch>
      
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
