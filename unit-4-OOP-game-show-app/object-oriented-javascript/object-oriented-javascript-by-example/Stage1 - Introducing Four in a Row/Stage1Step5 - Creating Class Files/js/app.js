// initialise new Game object
const game = new Game(); 

// select the button, setup an event
document.getElementById('begin-game').addEventListener('click', function() {
    game.startGame(); 
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
}); 


// e is the event, it could be anything e.g. gjhgs
document.addEventListener('keydown', (e) => {
    game.handleKeydown(event); 
}); 