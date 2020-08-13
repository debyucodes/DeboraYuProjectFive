import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw , faComments , faCog , faAngleLeft, faFlag, faTimes , faHeart } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';
// import Chat from './Chat';


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
      dogArray: [],
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
        // currentImage: this.state.dog.url,
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
      <div className="App">

        <div id="main" className="mainContainer">
          <nav>
            <a className="setting">
              <FontAwesomeIcon icon={ faCog } />
            </a>
            <h1> paw<FontAwesomeIcon icon={ faPaw } />nder </h1>
            <a href="#chat" className="chat">
              <FontAwesomeIcon icon={ faComments } />
            </a>
          </nav>


          
          <div className="imageContainer">
            <img src={this.state.dog} alt={''}></img >
          </div>

          <div>

            <button className="dislike" onClick={this.dislikeClick}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* <button onClick={ () => window.location.reload(false)}className="like">  */}
            <button onClick={this.handleLike}className="like"> 
              <FontAwesomeIcon icon={ faHeart } />
          </button>

          </div>

          {/* <Button />  */}
        </div>    

        {/* <Chat /> */}

        <div id="chat" className="chatContainer">
            <nav>
              <a href="#main" className="paw">
                <FontAwesomeIcon icon={ faPaw } />
              </a>
              <h1>
                <FontAwesomeIcon icon={ faComments } />
              </h1>
              
              <div>
                {/* empty div for aesthetic */}
              </div>
            </nav>

            <h2>New Matches</h2>
            <ul className="topBar">
              <li className="circleImage">
                <img src={this.state.dog} alt={''}></img>
                <p>92 Likes</p>
              </li>
              <li className="circleImage">
                <img src={this.state.dog} alt={''}></img>
                <p>Smol Doge</p>
              </li>
              <li className="circleImage">
                <img src={this.state.dog} alt={''}></img>
                <p>Borky Boi</p>
              </li>
              <li className="circleImage">
                <img src={this.state.dog} alt={''}></img>
                <p>Ruff Pawsome</p>
              </li>            
            </ul>

            <h2>Messages</h2>
            <div className="messages">

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Fluffy Floofer</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Wet Nose</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Fluffy Floofer</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Fluffy Floofer</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Fluffy Floofer</h3>
                  <p>woof!</p>
                </div>
              </a>
              
            </div>

      </div>

      <div id="sendMessage" className="sendMessage">
        <nav>
          <a href="#chat">
            <FontAwesomeIcon icon={ faAngleLeft } />
          </a>

          <div className="circleImage">
            <img src={this.state.dog} alt={''}></img>
          </div>
          <button onClick={this.reportClick} className="report">
            <FontAwesomeIcon icon={ faFlag } />
          </button>
          
        </nav>

        <div className="dogTalk">
          <div className="circleImage">
            <img src={this.state.dog} alt={''}></img>
          </div>
          <div className="whatDogSaid">
            <p>woof woof woof</p>
          </div>
        </div>

          <ul className="sentMessage">
            {this.state.messages.map( (oneOfTheMessages) => {
              return(
                <li key={oneOfTheMessages.id}>
                  <p>{oneOfTheMessages}</p>
                  
                  <button onClick={ () => this.deleteMessage(oneOfTheMessages.id)}>
                    <FontAwesomeIcon icon={ faTimes } />
                  </button>

                </li>
              )
              })
            }
          </ul>

        <form className="whatYouSay" action="submit">

          <label htmlFor="userInput" className="sr-only">Message
          </label>

          <input onChange={this.handleChange} type="text" name="userInput" placeholder="Message" value={this.state.userInput} id="userInput"></input>

          <button onClick={this.handleClick }className="sendButton">Send</button>

        </form>

      </div>
      
      </div>



    );

  }
}



export default App;
