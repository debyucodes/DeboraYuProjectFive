import React, { Component } from 'react';
import Matches from './Matches';
import Chat from './Chat';
import './App.css';
import Testing from './Testing';

import axios from 'axios';
import firebase from './firebase';

import {
  BrowserRouter as Router, 
  Route, 
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw , faComments , faCog , faAngleLeft, faFlag, faTimes , faHeart } from '@fortawesome/free-solid-svg-icons';


// The dog API - key: 8769c416-f65c-4a98-9456-5478f789a049

// Use axios to make API call
// Put return from the API call into state
  // - constructor with this.state
// Prompt a random image of dog, and user can up or down vote the image
// Voting system to upvote or downvote a dog photo - prompt "you're a monster" when user downvote 
// Make a search bar for user to search by breed
// style to look similar to dating apps, display dog image and breed name etc 
//Every time you like a photo, toggle "it's a match overlay" alert 


//my attempt to make an axios call 
class App extends Component {
  constructor() {
    super();
    //create an array for easier access specific data
    this.state ={
      dog: [],
      results: [],
      counter: 0,
      messages: [],
      userInput: '',
    }
  }

  // make an axios call to api to search for a random dog to display on page
  componentDidMount() {
    axios({
      url: 'https://api.thedogapi.com/v1/images/search',
      method: 'GET',
      responseType: 'json',
      params: {
        api_key: '8769c416-f65c-4a98-9456-5478f789a049',
        format: 'json',
        hasImage: true,
        limit: 100,
      }
    }).then((results) => {
      console.log(results);
      console.log(results.data[0].url);

      this.setState({
        dog: results.data[this.state.counter].url,
        results: results.data,
        dog1: results.data[91].url,
        dog2: results.data[92].url,
        dog3: results.data[93].url,
        dog4: results.data[94].url
      })
    })

    // Use firebase to store messages
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      console.log(response.val() );

      const data = response.val();

      const newMessagesArray = [];

      // Use a for in loop to iterate through our object
      for (let item in data) {
        newMessagesArray.push(data[item]);
      }

      this.setState({
        messages: newMessagesArray
      })
    
    });
    
  }

  //Like button
  handleLike = () => {
    const newCounter = this.state.counter + 1;
    console.log(newCounter);
    
    this.setState({     
      counter: newCounter,
      dog: this.state.results[this.state.counter].url,
    })

  }
  
  // console.log(results)

  //handleChange for user input
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })

    console.log(event.target.value)
  }

  //handleClick to submit
  handleClick = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);
    
    this.setState({
      userInput: ''
    })
  }

  //Button to delete a message
  deleteMessage = (message) => {
    console.log(message);
    const dbRef = firebase.database().ref();
    dbRef.child(message).remove();
  }

  //dislike button
  dislikeClick(){
    alert("Well, you're a monster");
  }


  // report button in message page
  reportClick(){
    alert('What is wrong with you? How can you report a dog.')
  }



  render() {
    
    return (
      <Router>

        <div className="App">

          {/* HOME PAGE */}
          <div className="instruction">
            <h3>Instructions:</h3>
            <p>Press the "like" button to go through our card stack of beautiful puppers. Once you have the pup you like, click on the "chat" button to slide into their DM and make a move!</p>
          </div>

          <div id="main" className="mainContainer">
            <nav>
              <a className="setting">
                <FontAwesomeIcon icon={ faCog } />
              </a>
              <h1> paw<FontAwesomeIcon icon={ faPaw } />nder </h1>
              <a href="#match" className="chatButton">
                <FontAwesomeIcon icon={ faComments } />
              </a>
            </nav>
            
            {/* MAIN IMAGE */}
            <div className="imageContainer">
              <img src={this.state.dog} alt={''}></img >
            </div>

            {/* LIKE/DISLIKE BUTTONS */}
            <div>
              <button className="dislike" onClick={this.dislikeClick}>
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <button onClick={this.handleLike}className="like"> 
                <FontAwesomeIcon icon={ faHeart } />
              </button>
            </div>

          </div>   

          {/* TESTING */}
          {/* <Route path="/testing" component={ Testing } />
          <Route path="/match" component={ Matches } />
          <Route path="/chat" component={ Chat } />

          <Link to="/testing">Testing</Link> */}

          {/* MATCH PAGE */}

          <Matches dog={this.state.dog} dog1={this.state.dog1} dog2={this.state.dog2} dog3={this.state.dog3} dog4={this.state.dog4}/>

          {/* CHAT PAGE */}

          <Chat dog={this.state.dog}  reportClick={this.reportClick} messages={this.state.messages} handleChange={this.handleChange} handleClick={this.handleClick} userInput={this.state.userInput} />

        </div>
      </Router>

    );

  }
}



export default App;
