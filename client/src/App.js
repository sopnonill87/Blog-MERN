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
import BlogDetails from "./components/Blog/BlogDetails";
import { loadUser } from "./actions/authActions";
import { Login, Registration } from "./components/Auth";
import { connect } from "react-redux";

const App = ({ auth }) => {
  const { isAuthenticated, user } = auth;
  //console.log("authentication:", isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    console.log("loaded for the first time");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation isAuthenticated={isAuthenticated} user={user} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/about" component={About} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/post/:id" component={BlogDetails} />
          {/* <Route exact path="/logout" component={Logout} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
