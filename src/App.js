import React from 'react';
import ClassComp from "./components/counter"
import Hovercomp from "./components/hovercouter"




class App extends React.Component {
  render(){
  return (
    <div className='container-fluid' className='App'>
      <ClassComp />
      <Hovercomp />
    </div>
  );
  }
}

export default App;
