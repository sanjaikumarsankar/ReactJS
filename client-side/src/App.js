import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  submit() {
     console.log('hello');
     // http request
  }

  handleChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label className="control-label col-sm-2 float-left"> Enter the number </label>
          <div className="col-sm-8">
            <input type="text"  placeholder="Enter range here" onChange={this.handleChange}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;
