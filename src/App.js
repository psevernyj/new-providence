import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Route, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";
import Help from "./components/Help";
import Tour from "./components/Tour";
import Features from "./components/Features";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
        <Nav/>
        <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/tour' component={Tour}/>
            <Route path='/features' component={Features}/>
            <Route path='/pricing' component={Pricing}/>
            <Route path='/help' component={Help}/>
            <Route path='/contacts' component={Contacts}/>
        </Switch>
    </>
  );
}

export default App;
