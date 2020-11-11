import React from 'react';
import './App.css'
import './SampleAppComponents/NewCompnents'
import NewCompnents from './SampleAppComponents/NewCompnents';

class App extends React.Component {

  styles={
    fontStyle : "bold",
    color : "blue",
    alignText : "center"
  }
  render(){
  return (
    <div class="App">
      <h1 style = {this.styles}> Welcome</h1> 
      <NewCompnents />
    </div>
  );
  }
}

export default App;
