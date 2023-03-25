import React from "react";
import'./List.css';
class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {myList1 : ['Iron man', 'Thor', 'Captain America', 'Hulk', 'Hawkeye', 'Black Widow'], 
        myList2 : ['Superman', 'Batman', 'Wonder Woman', 'Aquaman', 'Green Lantern', 'Flash', 'Cybrog'],
        MarOrDC : this.props.dataFromParent}
    }
    Set = () => this.setState(() => {
        return {MarOrDC: this.props.dataFromParent}
      })

    //Marvel = () => {this.props.parentCallbackTwo(this.state.myList1);}

   // DC = () => {this.props.parentCallbackTwo(this.state.myList2);}

    whichList = (MarOrDC) => {
        if (MarOrDC === "Marvel"){
            return (
                this.state.myList1.map((item) => { 
                    return <div className="List1">{item}</div>})
                )
        }
        else {
            return (this.state.myList2.map((item) => { 
                return <div className="List2">{item}</div>})
            )
        }
    }
    render() {
      return this.whichList(this.props.dataFromParent);
    }
}

export {List};