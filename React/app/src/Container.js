import React from "react";
import {List} from './List'
import { Selector } from "./Selector";
import './Container.css'
class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {whichList : "", printList : []} 
    }
    handleCallback = (childData) =>{
        this.setState({whichList: childData})
    }
    handleCallbackTwo = (childData2) =>{
        this.setState({printList: childData2})
    }
    render() {
        return <div className="Container"> <Selector parentCallback = {this.handleCallback}/>

            <List dataFromParent = {this.state.whichList}/>
        </div>
    }
}
export {Container};