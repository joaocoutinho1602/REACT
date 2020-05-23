import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [],
    nCounters: 0
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value += 1;
    /*const counters2 = [
      ...this.state.counters.map(c => {
        if (c.id === counter.id) c.value += 1;
        return c;
      })
    ];*/
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value -= 1;
    this.setState({ counters });
  };

  handleMoreCounters = () => {
    this.setState({ nCounters: this.state.nCounters + 1 });
    const counters = [
      ...this.state.counters,
      {
        id: this.state.nCounters + 1,
        value: 0
      }
    ];
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onMoreCounters={this.handleMoreCounters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            nCounters={this.state.nCounters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
