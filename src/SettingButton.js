import react, { Component } from 'react';

// make a drop down menu from setting icon
// for user to be able to make a search based on breed
// Super stretchy goal

class SettingButton extends Component {
  render() {
    return(
      <div className="hidden">

        <form>
          <label for="search" class="sr-only">Search
          </label>
          <input type="search" name="search" placeholder="search"></input>
        </form>

      </div>
    )
  }
}

export default SettingButton;