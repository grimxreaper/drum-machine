import { Component } from "react";
import react from React;


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      audio: "",
      display: ""

    }
  }

  handleChange = (letter) => {
    //do something here to play the audio
    this.setState = {
      audio: drum-pad.id.letter,
      display: "letter"

    }

  }


  render(){
    return (

      <div
      id="drum-machine"
      >
        <div id="display">
          <div className="drum-pad" >
            <audio className="clip" id="Q" ref="" src="" />
          </div>
          <div id="W" className="drum-pad" >
            <audio className="clip" id="W" ref="" src="" /> 
          </div>
          <div id="E" className="drum-pad" >
            <audio className="clip" id="E" ref="" src="" />
          </div>
          <div id="A" className="drum-pad" >
            <audio className="clip" id="A" ref="" src="" />
          </div>
          <div id="S" className="drum-pad" >
            <audio className="clip" id="S" ref="" src="" />
          </div>
          <div id="D" className="drum-pad" >
            <audio className="clip" id="D" ref="" src="" />
          </div>
          <div id="Z" className="drum-pad" >
            <audio className="clip" id="Z" ref="" src="" />
          </div>
          <div id="X" className="drum-pad" >
            <audio className="clip" id="X" ref="" src="" />
          </div>
          <div id="C" className="drum-pad" >
            <audio className="clip" id="C" ref="" src="" />
          </div>

        </div>
      </div>

    )
  }

}

export default App;