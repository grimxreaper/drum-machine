import { Component } from "react";
import react from React;


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }


  render(){
    return (

      <div
      id="drum-machine"
      >
        <div id="display">
          <div id="Q" className="drum-pad" >Q</div>
          <div id="W" className="drum-pad" >W</div>
          <div id="E" className="drum-pad" >E</div>
          <div id="A" className="drum-pad" >A</div>
          <div id="S" className="drum-pad" >S</div>
          <div id="D" className="drum-pad" >D</div>
          <div id="Z" className="drum-pad" >Z</div>
          <div id="X" className="drum-pad" >X</div>
          <div id="C" className="drum-pad" >C</div>

        </div>
      </div>

    )
  }

}

export default App;