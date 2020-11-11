import React from 'react';
import Classprops from "./components/classprops"
import FunctionalProps from "./components/functionalprops"

class App extends React.Component {
  render(){
  return (
    <div className='container-fluid' className='App'>
     <Classprops name ={"Aakash"} place ={"Bangalore"}>child components</Classprops>
     <Classprops name ={"Avinash"} place ={"Pune"}>
        <button>CLick</button>
       </Classprops>
     <Classprops name = {"Dhanush"} place ={"Rajasthan"}>
       <FunctionalProps name ={"Rani"} place = {"mysore"}></FunctionalProps>
     </Classprops>
    </div>
  );
  }
}

export default App;
