import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Chat extends Component {
  render() {
    return(
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

          <div className="topBar">
            <img src={this.state.dog.url} alt={''}></img>
            <img src={this.state.dog.url} alt={''}></img>
            <img src={this.state.dog.url} alt={''}></img>
            <img src={this.state.dog.url} alt={''}></img>
          </div>
      </div>
    )
  }
}