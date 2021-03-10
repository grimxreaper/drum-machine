import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';

const sounds = [
  {
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
]

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const App = (props) => (
  <div class="display" id="display">
          {sounds.map((sound, index) => (
            <Box text={sound.key} key={index} audio={sound.mp3}/>
          ))}
        </div>
      

    );
  
// we have a box with some text in it coming from the props
//converted to class based component to have state on it 
class Box extends React.Component {
  render() {
    const { text, audio } = this.props; 
    return(
        <div className="box">
          {text}
          <audio src={audio} />
        </div>
      )
  }
 }

export default App;
ReactDOM.render(<App />, document.getElementById('drum-machine'));