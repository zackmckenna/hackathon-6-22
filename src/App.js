import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Form, Button, Card, Container, Col, Row, ListGroup, ListGroupItem, Jumbotron, InputGroup, FormControl } from 'react-bootstrap'
import { repoData } from './repodata'
import GithubGoNav from './components/GithubGoNav'
import ProgrammerPlayingCard from './components/ProgrammerPlayingCard'
import CardBlob from './components/CardBlob'
import UserRepos from './components/UserRepos'

function App() {
  const [username, setUsername ] = useState('')
  const [userData, setUserData ] = useState(null)
  const [userRepos, setUserRepos] = useState(null)

  const makeAPIRequest = (endpoint) => {
    var myHeaders = new Headers();
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const authHeader = "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET);

    myHeaders.append("Authorization", authHeader);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://api.github.com/${endpoint}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setUserData(JSON.parse(result))
        console.log(JSON.parse(result))
      })
      .catch(error => console.log('error', error));
  }

  const makeAPIRepoRequest = (endpoint) => {
    var myHeaders = new Headers();
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const authHeader = "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET);

    myHeaders.append("Authorization", authHeader);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://api.github.com/${endpoint}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setUserRepos(JSON.parse(result))
        console.log(JSON.parse(result))
      })
      .catch(error => console.log('error', error));
  }

  const testAuth = () => {
    var myHeaders = new Headers();
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const authHeader = "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET);

    myHeaders.append("Authorization", authHeader);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.github.com/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const handleAuthClick = () => {
    axios.get('https://api.github.com/users/zackmckenna')
        .then(res => {
          console.log(res)
        })
  }

  const generateRepos = (userRepos) => {
    if(userRepos) {
      return userRepos.map(repo => {
        return <UserRepos repo={repo} />
      })
    }
  }


  const handleGetUserData = () => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        console.log(res)
        setUserData(res.data)
      })
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        console.log(res)
        setUserRepos(res.data)
      })
  }

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  return (
    <div className="App">
    <header>
      <GithubGoNav />
    </header>
    <Container>
      <Jumbotron className='text-center mt-3'>
        <h1>GITHUB: The Gathering</h1>
        <p>A programmer trading card app made for Minbean's 6-22 minihachk, grooving with github</p>
      </Jumbotron>
      <Row>
        <Col className='text-center' xs s="6" m="6" lg="6">
          <InputGroup style={{ margin: '0 auto'}} className="mb-3">
            <FormControl
              style={{ margin: '0 auto'}}
              onChange={(e) => handleUsernameChange(e)}
              placeholder="github username"
              aria-label="github username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button style={{ color: 'white'}} className='btn-info' onClick={() => makeAPIRequest(`users/${username}`)} variant="outline-secondary">Create a Card</Button>
              <Button style={{ color: 'white'}} className='btn-info' onClick={() => makeAPIRepoRequest(`users/${username}/repos`)} variant="outline-secondary">GET REPOS</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProgrammerPlayingCard data={userData} />
        </Col>
        <Col>
          <CardBlob data={userData}/>
        </Col>
      </Row>
      <Row>
        {generateRepos(userRepos)}
      </Row>
    </Container>
    </div>
  );
}

export default App;
