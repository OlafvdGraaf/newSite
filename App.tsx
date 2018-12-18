import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem } from 'reactstrap';

interface IState {
  text: string
}

class App extends Component<any, IState> {
  constructor(props){
    super(props)
    
    // this.setCurrentView = this.setCurrentView.bind(this);
    this.changeText = this.changeText.bind(this);

    this.state={
      text: ""
    }
    
  }

  public changeText(e: any){
    e.preventDefault()

    this.setState({
      text: "works"
    })
  }

  /* set current active button
  public setCurrentView(buttonActive: string, newView: HTMLElement){
    this.setState({
      buttonActive,
      newView
    })
  }
  */

  render() {
    return (
      <div className="App">
        <Nav className="App-header pt-4 d-flex justify-content-center position-sticky">
          <NavItem className="px-4 pt-3 navButton" onClick={this.changeText}>
            <span> Home </span>
          </NavItem>

          <NavItem className="px-4 pt-3 navButton" onClick={this.changeText}>
            <p> Doelstelling </p>
          </NavItem>

          <NavItem className="px-4 pt-3 navButton" onClick={this.changeText}>
            <p> Referenties </p>
          </NavItem>

          <NavItem className="px-4 pt-3 navButton" onClick={this.changeText}>
            <p> Bouwmanagement </p>
          </NavItem>
        </Nav>

        <div className="light-blue-bar pt-2"/>

        <div>
          <h1>{this.state.text}</h1>
        </div>

      </div>
    );
  }
}

export default App;
