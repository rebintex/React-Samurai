import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  {id: 0, news: "I am the First", likes: '1'},
  {id: 1, news: "I am the Second", likes: '21'},
  {id: 2, news: "I am the Third", likes: '12'},
]

let dialogues = [
  { id: 0, name: "Andrey" },
  { id: 1, name: "Bakhadir" },
  { id: 2, name: "Vladilen" },
  { id: 3, name: "Aleksey" },
  { id: 4, name: "Sergey" },
]

let messages = [
  { id: 0, message: "Hi man," },
  { id: 1, message: "Hello bro," },
  { id: 2, message: "How are you" },
  { id: 3, message: "How do you do?" },
  { id: 4, message: "Good day" },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogues={dialogues}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
