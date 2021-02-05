import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogues from './Components/Dialogues/Dialogues';
import Contacts from './Components/Contacts/Contacts';
import Videos from './Components/Videos/Videos';
import {BrowserRouter, Route} from 'react-router-dom'; 



function App(props) {

  

  return (
    <BrowserRouter>
    <div className="app-wrapper">
       <Header />
       <Navbar />
       <div className="app-wrapper-content">
       <Route path = '/messages' render={() => <Dialogues dialogues={props.dialogues} messages={props.messages}/> } />
       <Route path = '/profile' render={() => <Profile posts={props.posts} /> } />
       <Route path = '/contacts' render={() => <Contacts/> } />
       <Route path = '/videos' render={() => <Videos/> } />
     
       </div> 
    </div> 
    </BrowserRouter>);
}



export default App;
