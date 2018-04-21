import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Jumbotron>
          <h2>NYT Article Search</h2>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
