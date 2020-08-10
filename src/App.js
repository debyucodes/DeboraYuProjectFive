import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button';
// import { fas fa-paw } from '@fortawesome/react-fontawesome';



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


  render() {
    
    return (
      <div className="App">

        <div className="mainContainer">
          <h1>huehuehue doge<i className="fas fa-paw"></i></h1>
          
          <div className="imageContainer">
            <img src={this.state.dog.url} alt={''}></img >
          </div>
          <h2>{this.state.dog.name}</h2>
          <Button /> 
        </div>    
        
      </div>
    );

  }
}



export default App;
