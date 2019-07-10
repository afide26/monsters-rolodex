import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import "./components/card-list/card-list.styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters } = this.state;
    return (
      <div>
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
