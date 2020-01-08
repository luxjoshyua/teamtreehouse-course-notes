import React, { Component } from 'react'; 

class AddPlayerForm extends Component {

    // render is only called once
    playerInput = React.createRef();

  
    handleSubmit = (e) => {
        // prevent from reloading in the browser, as we'd lose the applicaton state
        e.preventDefault(); 
        this.props.addPlayer(this.playerInput.current.value); 
        e.currentTarget.reset();
    }

    render() {
        // console.log(this.state.value)
        // console.log(this.playerInput);
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    ref={this.playerInput}
                    placeholder="Enter a player's name"
                />

                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        ); 
    }
}

export default AddPlayerForm; 