import React from 'react';
import ClassComp from "./components/counter"
import Hovercomp from "./components/hovercouter"
import ParentComponent from "./components/parentcomp"



class App extends React.Component {
  render(){
  return (
    <div className='container-fluid' className='App'>
      <ClassComp />
      <Hovercomp />
      <ParentComponent />
    </div>
  );
  }
}

export default App;
