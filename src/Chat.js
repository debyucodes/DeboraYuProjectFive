import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFlag, faTimes } from '@fortawesome/free-solid-svg-icons';

class Chat extends Component {
  render() {
    return(
      <div>

        <div className="instruction">
          <h3>Instructions:</h3>
          <p>Congrats! Looks like you are in a chat with the love of your life. Here's your chance to drop your goodest pick-up lines to your pawnderella. If you are having second thoughts, click "back" button to go back to main page to match with another pup. Yikes!</p>
        </div>
        <div id="sendMessage" className="chatContainer">
            <nav>
              <a class="navButton" href="#main">
                <FontAwesomeIcon icon={ faAngleLeft } />
              </a>

              <div className="circleImage">
                <img src={this.props.dog} alt={''}></img>
              </div>
              <button onClick={this.props.reportClick} className="report">
                <FontAwesomeIcon icon={ faFlag } />
              </button>           
            </nav>

            <div className="dogTalk">
              <div className="circleImage">
                <img src={this.props.dog} alt={''}></img>
              </div>
              <div className="whatDogSaid">
                <p>woof woof woof</p>
              </div>
            </div>

              <ul className="sentMessage">
                {this.props.messages.map( (oneOfTheMessages) => {
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

              <input onChange={this.props.handleChange} type="text" name="userInput" placeholder="Message" value={this.props.userInput} id="userInput"></input>

              <button onClick={this.props.handleClick }className="sendButton">Send</button>

            </form>
          </div>
        </div>


    )
  }
}

export default Chat;