var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay; 
document.write('There are ' + secondsPerDay + ' seconds in a day'); 

var yearsAlive = 26;

// calculate how many seconds been alive    
var totalLifeSeconds = (secondsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear) * 26;  
document.write("I've been alive for more than " + totalLifeSeconds + "seconds");  