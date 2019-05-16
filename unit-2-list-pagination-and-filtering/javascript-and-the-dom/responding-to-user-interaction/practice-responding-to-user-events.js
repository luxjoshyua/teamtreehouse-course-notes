/*
  -- Practice: Responding to User Interaction --

  <section>
    <h1>Making a Webpage Interactive</h1>
    <p>JavaScript is an exciting language that you can use to power web servers, create desktop programs, and even
        control robots. But JavaScript got its start in the browser way back in 1995.</p>
    <hr>
    <p>Things to Learn</p>
    <ul>
        <li>Item One: <input type="text"></li>
        <li>Item Two: <input type="text"></li>
        <li>Item Three: <input type="text"></li>
        <li>Item Four: <input type="text"></li>
    </ul>
    <button>Save</button>
  </section>

*/


// add a condition that changes the background of the input elements only
let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT') {
    event.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});
