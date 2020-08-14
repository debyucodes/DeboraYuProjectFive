import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw , faComments } from '@fortawesome/free-solid-svg-icons';

class Matches extends Component {
  render() {
    return(
      <div>

        <div className="instruction">
          <h3>Instructions:</h3>
          <p>Ahh! I see you're talking to more than one pup at a time, you player! Since our app is very wholesome, we encourage you to only chat with one dog at a time.. by encourage, we mean you can only chat with Floofy.</p>
        </div>
      

        <div id="match" className="matchContainer">
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
                  <img src={this.props.dog1} alt={''}></img>
                  <p>92 Likes</p>
                </li>
                <li className="circleImage">
                  <img src={this.props.dog2} alt={''}></img>
                  <p>Smol Doge</p>
                </li>
                <li className="circleImage">
                  <img src={this.props.dog3} alt={''}></img>
                  <p>Borky Boi</p>
                </li>
                <li className="circleImage">
                  <img src={this.props.dog4} alt={''}></img>
                  <p>Ruff Pawsome</p>
                </li>            
              </ul>

              <h2>Messages</h2>
              <div className="messages">

                <a href="#sendMessage" className="match">
                  <div className="circleImage">
                      <img src={this.props.dog} alt={''}></img>
                  </div>
                  <div className="matchText">
                    <h3>Floofy Floofer</h3>
                    <p>woof!</p>
                  </div>
                </a>

                <a href="#sendMessage" className="match">
                  <div className="circleImage">
                      <img src={this.props.dog} alt={''}></img>
                  </div>
                  <div className="matchText">
                    <h3>Floofy Wet Nose</h3>
                    <p>woof!</p>
                  </div>
                </a>

                <a href="#sendMessage" className="match">
                  <div className="circleImage">
                      <img src={this.props.dog} alt={''}></img>
                  </div>
                  <div className="matchText">
                    <h3>Boop The Floofy</h3>
                    <p>woof!</p>
                  </div>
                </a>

                <a href="#sendMessage" className="match">
                  <div className="circleImage">
                      <img src={this.props.dog} alt={''}></img>
                  </div>
                  <div className="matchText">
                    <h3>Furriest Floof</h3>
                    <p>woof!</p>
                  </div>
                </a>
                
              </div>

        </div>
      </div>
    )
  }
}

export default Matches;