// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// //import Movie from "./hoc/Movie";
// //import Counter from "./hooks/Counter";
// import Users from "./hooks/Users";

// function App() {
//   return //<Users />; //<Counter />; //<Movie id={1} />;
// }

// export default App;

import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends Component {
  state = { currentUser: { name: null } };

  handleLoggedIn = username => {
    console.log("getting the user: " + username);
    const user = { name: "Me" };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
