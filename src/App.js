import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  }

  render() {
    const { keys } = this.state;
    return (
      <div id="drum-machine">
        <div id="display">
          {keys.map((key, index) => (
            <Box text={key} key={index}/>
          ))}
          
        </div>
      </div>

    );
  }
}

// we have a box with some text in it coming from the props
const Box = () => (
  <div className="box">
    {props.text}
  </div>
)


export default App;
ReactDOM.render(<App />, document.getElementById('app'));