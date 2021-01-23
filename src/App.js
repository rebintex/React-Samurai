import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogues from './Components/Dialogues/Dialogues';


function App() {
  return (
    <div className="app-wrapper">
       <Header />
       <Navbar />
       <div className="app-wrapper-content">
       <Profile />
       </div> 
       {/* <Profile />  */}
         </div> );
}



export default App;
