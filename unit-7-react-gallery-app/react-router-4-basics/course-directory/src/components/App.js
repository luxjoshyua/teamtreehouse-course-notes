import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'; 

// Import the app components you want to render
import Header from './Header';
import Home from './Home'; 
import About from './About'; 
import Teachers from './Teachers';
import Courses from './Courses'; 

const App = () => (
  // renders the root router that listens to URL changes and provides other 
	// react router components information about the current URL and which
	// components to render
  <BrowserRouter>
    <div className="container">
      {/* header needs to be present at all times, so nest above the router paths */}
      <Header />
      {/* set up the route, say which component to render */}
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
      {/* Alternative way of writing the router, title='About' gives it a prop we can use */}
      <Route path="/about" render={ () => <About title='About' />} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;