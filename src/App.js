import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Step5 } from './components/Step5';


function App() {

  return (
  <>
    <Router>
      <Switch>
        <Route exact path ="/" component ={Step1}></Route>
        <Route  path ="/step2" component ={Step2}></Route>
        <Route  path ="/step3" component ={Step3}></Route>
        <Route  path ="/step4" component ={Step4}></Route>
        <Route  path ="/step5" component ={Step5}></Route>
      </Switch>
    </Router> 
  </>
  );
}

export default App;
