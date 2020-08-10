import React, { Component } from 'react';
import axios from 'axios';


class Button extends Component {
  constructor() {
    super();

    this.state ={}
  }

  dislikeClick(){
    alert("Well, you're a monster!");
  }

  // refreshPage() {
  //   window.location.reload(false);
  

  getAPI() {

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
    return(
      <div>
        <button className="dislike" onClick={this.dislikeClick}>Dislike</button>
        <button onClick={this.getAPI}className="like"> Like </button>

      </div>
    )
  }
}

export default Button;