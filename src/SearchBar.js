import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(

      <form>
        <label for="search" class="sr-only">Search
        </label>
        <input type="search" name="search" placeholder="search"></input>
      </form>

    )
  }
}