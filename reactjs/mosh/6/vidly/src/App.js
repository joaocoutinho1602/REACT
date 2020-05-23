import React, { Component } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
