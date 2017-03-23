import React, { Component } from 'react';
import Trigger from './Modal.js'
import './App.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="App">
      <Trigger></Trigger>
       
        <div className="App-header">
          <h1>dMetrics SearchBar</h1>
        </div>
       <div className='search'>
        <div className="gcse-searchbox" data-webSearchResultSetSize='1'
        data-newWindow="true" data-queryParameterName="search" />
      </div>
        <div className="gcse-searchresults" data-webSearchResultSetSize='1'
        data-newWindow="true" data-queryParameterName="search" />
      </div>
    );
  }
}

export default SearchBar;
