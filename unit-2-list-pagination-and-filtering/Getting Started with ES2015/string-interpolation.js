let name = 'Gary'; 

// ${} marks the dynamic value in the template literal
`Hello, ${name}, nice to see you.`

console.log(name); 
// Hello, Gary, nice to see you. 

// `I'll be there at ${2 * 3} o'clock.` can do maths in it too

function like(thing) {
    return 'I like ' + thing;
  }
  
  // const sentence = `<p>` + like(`apples`) + `, but ` + love(`oranges`) + `.</p>`;
// does the same as the above, just shorter
  const sentence = `<p>${like('apples')}, but ${love('oranges')}.</p>`;
  
  document.querySelector('.interpolation').innerHTML = sentence;
  // I like apples
  
  function love(thing) {
    return `I love ${thing}`;
  }
  
  

