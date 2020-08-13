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
  

  // function to clear the previous image and fetch a new one


  render() {
    return(
      <div>
        <button className="dislike" onClick={this.dislikeClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* <button onClick={ () => window.location.reload(false)}className="like">  */}
        <button onClick={this.getAPI}className="like"> 
          <FontAwesomeIcon icon={ faHeart } />
        </button>

      </div>
    )
  }
}

export default Button;