import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users : users}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(element => {
          return <div key={element.id}>{element.name}</div>
        })}
      </div>
    );
  }
}

export default App;
