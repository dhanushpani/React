import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import './App.css';
import ClassComp from "./components/counter"

function App() {
  return (
    <div className='container-fluid' className='App'>
      <ClassComp />
    </div>
  );
}

export default App;
