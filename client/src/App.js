import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Todo from "./components/Todo";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dashboard from './components/Dashboard';
import About from './components/About';
import Categories from './components/Categories';
import Login from './components/Login';
import BlogDetails from './components/BlogDetails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/categories' component={Categories}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/single' component={BlogDetails} />
        </Switch>

      </BrowserRouter>
    </div>
  );
};

export default App;
