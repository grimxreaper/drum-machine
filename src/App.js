import ReactDOM from 'react-dom';
import React from 'react';
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

const App = (props) => (
  <div class="display" id="display">
    <h1>X is playing </h1>
          {sounds.map((sound, index) => (
            <DrumPad text={sound.key} key={index} audio={sound.mp3}/>
          ))}
        </div>
);
  
// we have a box with some text in it coming from the props
//converted to class based component to have state on it 
class DrumPad extends React.Component {
  state = {
    currentID: ''
  }
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    }

  componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    }) 
  }

  playSound = () => {
    this.audio.current.play();
    
    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add('active');

    const display = parent.parent; //the parent here is the drum-pad which is inside the display
    display.querySelector('h1').innerText = id;
  }

  
  render() {
    const { text, audio } = this.props; 
    return(
      <div id="drum-machine">
        <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
          {text}
          <audio ref={this.audio} src={audio} class="clip" id={text} />
        </div>
      </div>
      )
  }
 }

 document.addEventListener('keydown', (e) => {
   const id = e.key.toUpperCase();
   const audio = document.getElementById(id);
   if(audio) {
     const parent = audio.parentNode;
     parent.classList.add('active');
     audio.play();
   }
 });

export default App;
ReactDOM.render(<App />, document.getElementById('app'));