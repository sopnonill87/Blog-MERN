import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import CategoryPosts from "./components/CategoryPosts";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(loadUser());
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
          <Route exact path="/categories/:id/posts" component={CategoryPosts} />
          {/* <Route exact path="/logout" component={Logout} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
