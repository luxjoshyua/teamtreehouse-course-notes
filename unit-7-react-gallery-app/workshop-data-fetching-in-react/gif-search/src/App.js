import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }; 
  } 

  // componentDidMount is called immediately after a component is loaded in the DOM
  // componentDidMount() {
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     // convert the response to json
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({ gifs: responseData.data });
  //     })

  //     // catch errors, log it to the console
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error); 
  //     }); 
  // }


  // axios version of the above
  componentDidMount() {
    // call the search on load so content is displayed automatically
    this.performSearch(); 
  }

  // make the search dynamic by passing in query
  // make content show automatically (cats)
  performSearch = (query = 'cats') => {
    // URL search endpoint, can be customised
    // limit the call to 24 gifs each time search is performed
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    // axios automatically returns the data in json format, so don't have to do that step
    .then(response => {
      this.setState({
        gifs: response.data.data,
        loading: false
      });
    })

    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
 
  render() { 
    // log the gif state
    console.log(this.state.gifs); // logs each object, each object is a separate gif
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            {/* passes the search performed in performSearch to the component and invokes it whenever
            the onSearch prop is called */}
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            // if the state is loading, render a paragraph, otherwise if loading state is false, render the gif list component
            (this.state.loading)
            ? <p>Loading...</p>
            // anytime the gif state gets updated, the GifList component will receive an array of objects via the data prop data={this.state.gifs}*/ */}
            : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
