import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// Counter is a dependency within the Player component, so import it here, not in the main app.js file with the other components
import Counter from './Counter'; 
import Icon from './Icon'; 

// purecomponent runs a lifecycle method that checks whether a rerender of the component is required,
// and then calls render if it detects change only in state or props
class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    // makes the prop required, will throw error if not present
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool,
    id: PropTypes.number,
    index: PropTypes.number,
  };

  render() {
    // here we add the names of the props we want to destructure
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props; 

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

          {/* display the crown icon component */}
          <Icon isHighScore={this.props.isHighScore} />
          { name }
        </span>
  
        <Counter 
          score={score} 
          // function is now available to be called/invoked from within the Counter component
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player; 