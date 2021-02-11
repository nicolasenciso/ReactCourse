import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person'

/* default
function App() {
  return (
    <div className="App">
      <h1>Hi, im a react app</h1>
    </div>
  );
}
*/

/*course*/
class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: "Manu", age: 27}
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked');
    // dont do this this.state.persons[0].name = 'maximilian';
    this.setState({persons: [
      { name: 'maximilian', age: 29}
    ]})
  }

  render(){
    return (
      <div className="App">
        <h1>Hi im react ddd</h1>
        <p>soy nicolas</p>
        <button onClick={this.switchNameHandler}> Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies: Racing  </Person>
      </div>
    );
  }
}


export default App;
