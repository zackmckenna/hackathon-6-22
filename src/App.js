import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const handleAuthClick = () => {
    axios.get('https://api.github.com', {
      params: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET
      }
    })
        .then(res => {
          console.log(res)
        })
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_TEST)
    console.log(process.env.REACT_APP_CLIENT_ID)
    console.log(process.env)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MINTBEAN hackathon 6-22
          <button onClick={() => handleAuthClick()}>AUTH</button>
        </p>
      </header>
    </div>
  );
}

export default App;
