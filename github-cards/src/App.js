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
      followersText: '',
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

  handleChanges = e => {
    this.setState({
      followersText: e.target.value.substr(0, 20)
    })
  }

  searchFollowers = e => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.state.followersText}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: this.state.followersText
          })
         
        })
      
      .catch(err => console.log(err))
  }

  render() {
    const { followers, followersText } = this.state;

    const filteredFollowers = followers.filter(follower => 
        follower.login.toLowerCase().includes(followersText.toLocaleLowerCase())
      )
    
  return (
    <div className="App">
        <h1>Github Users</h1>
      <User userData={this.state.userData} />
      <h4>Search Followers</h4>
      <input
        type="search"
        value={this.state.followersText}
        onChange={(e) => this.setState({followersText: e.target.value})}
        placeholder='search for follower'
      />
      <button onClick={this.searchFollowers}>Search Followers</button>
      <div className="followers">
        
          <Followers followers={filteredFollowers} />
       
      </div>
      
    </div>
  );
}
}

