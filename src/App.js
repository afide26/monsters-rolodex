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
    return (
      <div>
        <CardList>
          {this.state.monsters.map(monster => (
            <h1 key={monster._id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
