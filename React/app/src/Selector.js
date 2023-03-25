import React from "react";
import './Selector.css'
class Selector extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    
    }
    Marvel = () => {this.props.parentCallback("Marvel");}

    DC = () => {this.props.parentCallback("DC");}

    render() {
        return <div>
        <button className="Button1"
          onClick= {this.Marvel.bind(this)}
        >
          Marvel fan
        </button>
        <button className="Button2"
         onClick= {this.DC.bind(this)}
          >
            DC fan
          </button>
      </div>
}
}
export {Selector};