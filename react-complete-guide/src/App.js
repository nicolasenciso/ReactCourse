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
  render(){
    return (
      <div className="App">
        <h1>Hi im react ddd</h1>
        <p>soy nicolas</p>
        <Person name="Nicolas" age="25"> My hobbies: Racing  </Person>
      </div>
    );
  }
}


export default App;
