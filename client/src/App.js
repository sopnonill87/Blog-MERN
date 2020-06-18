import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Categories from "./components/Categories";
//import Login from "./components/Auth/Login";
import BlogDetails from "./components/Blog/BlogDetails";
//import Registration from "./components/Auth/Registration";
import { loadUser } from "./actions/authActions";

import { Login, Registration } from "./components/Auth";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser());
  //   console.log("loaded for the first time");
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/about" component={About} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/post/:id" component={BlogDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
