import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw , faComments , faCog , faAngleLeft, faFlag} from '@fortawesome/free-solid-svg-icons';
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
    }
  }

  // library.add()


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
      }
    }).then((results) => {
      console.log(results);
      console.log(results.data[0].url);

      this.setState({
        dog: results.data[0],
      })
    })
  }

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
            <img src={this.state.dog.url} alt={''}></img >
          </div>
          <h2>{this.state.dog.name}</h2>
          <Button /> 
        </div>    

        {/* <Chat /> */}

        <div id="chat" className="chatContainer">
            <nav>
              <a href="#main" class="paw">
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
                <img src={this.state.dog.url} alt={''}></img>
                <p>92 Likes</p>
              </li>
              <li className="circleImage">
                <img src={this.state.dog.url} alt={''}></img>
                <p>dog 1</p>
              </li>
              <li className="circleImage">
                <img src={this.state.dog.url} alt={''}></img>
                <p>dog 2</p>
              </li>
              <li className="circleImage">
                <img src={this.state.dog.url} alt={''}></img>
                <p>dog 3</p>
              </li>            
            </ul>

            <h2>Messages</h2>
            <div class="messages">
              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog.url} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Smol Doge</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog.url} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Pawsome Ruff</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog.url} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Fluffy Floofer</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog.url} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Borky Boi</h3>
                  <p>woof!</p>
                </div>
              </a>

              <a href="#sendMessage" className="match">
                <div className="circleImage">
                    <img src={this.state.dog.url} alt={''}></img>
                </div>
                <div className="matchText">
                  <h3>Wet Snout</h3>
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
            <img src={this.state.dog.url} alt={''}></img>
          </div>
          <button onClick={this.reportClick} className="report">
            <FontAwesomeIcon icon={ faFlag } />
          </button>
          
        </nav>

        <div className="dogTalk">
          <div className="circleImage">
            <img src={this.state.dog.url} alt={''}></img>
          </div>
          <div class="whatDogSaid">
            <p>woof woof woof</p>
          </div>
        </div>

        <form className="whatYouSay">
          <label for="whatYouSay" class="sr-only">Search
          </label>
          <input type="whatYouSay" name="whatYouSay" placeholder="Message"></input>
          <button className="sendButton">Send</button>
        </form>

      </div>
      
      </div>



    );

  }
}



export default App;
