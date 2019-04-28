var questions = [
  // converting from an array[] to an object{}
  {
    question: 'How many states are in the United States?', 
    answer: 50
  },
  {
    question: 'How many continents are there?',
    answer: 7
  },
  {
    question: 'How many legs does an insect have?', 
    answer: 6
  }
];

var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  // loop through the array, each loop access one of the array elements (an object),
  // then we grab a value of one of the properties .question .answer
  question = questions[i].question;
  
  answer = questions[i].answer; 
  
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);