import React from 'react';
import axios from 'axios';
import User from './components/User'
import Followers from './components/Followers'

import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      userData: [],
    }
  }
  

  componentDidMount() {
    axios
      .get('https://api.github.com/users/sonethaya')
      .then(res => {
        console.log(res.data)
        this.setState({
          
          userData: res.data
        })
      })
      .catch(err => console.log(err))
   
      axios
      .get('https://api.github.com/users/sonethaya/followers')
      .then(res => {
        console.log(res.data)
        this.setState({
          
          followers: res.data
        })
      })
      .catch(err => console.log(err))
    console.log(this.state.user)
  }

  

  render() {
  return (
    <div className="App">
        <h1>Github Users</h1>
      <User userData={this.state.userData} />
      <Followers followers={this.state.followers} />
    </div>
  );
}
}

