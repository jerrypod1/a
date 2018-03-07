import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //constructor(props){
    //super(props);
    //this.handleClick = this.handleClick.bind(this)
  //}
// handleClick(event) {console.log(this.props.title)}
  handleClick = (event) => {console.log(this.props.title)}
  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <div className ="App-stu">
        <img
        src={this.props.image}
        alt=""
        width={260}
        height={160}
        className="App-iamge"
        />
          <h3 className="App-cover">{this.props.title}</h3>
          <p className="App-author">{this.props.author}</p>
        </div>
      </div>
    );
  }
}

export default App;
