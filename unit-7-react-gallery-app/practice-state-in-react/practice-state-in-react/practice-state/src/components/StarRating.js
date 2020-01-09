import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that returns 5 Star components
  // loop through and use push() to add stars to an array based on a number value,
  // then render the stars to the DOM
renderStars = () => {
  let stars = [];
  let maxRating = 5;

  for (let i = 0; i < maxRating; i+=1) {
      stars.push(
        <Star 
          isSelected={this.state.rating > i}
          setRating={ () => this.handleRatingUpdate(i + 1)}
          key={i}
        />
      ); 
  }
  return stars; 
}

// Write an event handler that updates the rating state.
// Pass the function to a Star component via props
handleRatingUpdate = (rating) => {
  if (this.state.rating === rating) {
    this.setState({ rating: 0 });
  } else {
    this.setState({ rating }); 
    }
  }


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        { this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;