import React from "react";
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.jsx'
import Contact from './pages/contact/contact.jsx'


const App = () => {
  return (
    <>
     <Switch>
     <Route exact path='/' component={HomePage}/>
     
     <Route path='/contact' component={Contact}/>

</Switch>
    </>
  );
};

export default App;
