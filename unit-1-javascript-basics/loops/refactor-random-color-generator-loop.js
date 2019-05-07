var html = '';
var red;
var green;
var blue;
var rgbColor;

// setup a loop that runs through ten times
// start at 0, increase until reach 10 then break
// i < 10; is the condition 
// i += 1; is the same as i++
for (var i = 1; i < 100; i++) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
// document.write(html) needs to be outside the for loop
document.write(html);

// Teachers more efficient solution
var html = '';
var rgbColor; 

function genRan8BitNum(){
  // return is used to exit the function and return a single value to wherever the function is called
   return Math.floor(Math.random() * 256);
 }        

// when a var is declared inside a function, it's limited to that function because of function scope
function randomColor() {
  var color = 'rgb('; 
  color += genRan8BitNum() + ','; 
  color += genRan8BitNum() + ','; 
  color += genRan8BitNum() + ')'; 
  return color; 
}

function print(message) {
  document.write(message); 
}

// setup a loop that runs through ten times
// start at 0, increase until reach 10 then break
// i < 10; is the condition 
// i += 1; is the same as i++
for (var i = 1; i < 100; i++) {
  rgbColor = randomColor(); 
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

// document.write(html) needs to be outside the for loop
print(html);
