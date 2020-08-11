import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart , faTimes } from '@fortawesome/free-solid-svg-icons';


class Button extends Component {
  constructor() {
    super();
    this.state ={
      dog: [],
    }
    // this.getAPI = this.getAPI.bind(this);
  }

  dislikeClick(){
    alert("Well, you're a monster");
  }

  // refreshPage() {
  //   window.location.reload(false);
  
  // function to make another API call
  getAPI = () => {

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

  // function to clear the previous image and fetch a new one


  render() {
    return(
      <div>
        <button className="dislike" onClick={this.dislikeClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <button onClick={this.getAPI}className="like"> 
          <FontAwesomeIcon icon={faHeart} />
        </button>

      </div>
    )
  }
}

export default Button;