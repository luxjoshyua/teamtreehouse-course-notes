/* 
-- Ternary Operator --

- a compact, two-way branching conditional expression
- is called ternary because it involves three expressions
<boolean> <expression if true> <expression if false>
- the boolean determines which of the next two expressions runs

<boolean> ? <expression if true> : <expression if false>

*/

var isTrue = true;

if(isTrue) {
	console.log('yes');
} else {
	console.log('no');
}

// if we change isTrue = false, no will be logged
isTrue ? console.log('yes') : console.log('no');


var isTrue = false;

var yesOrNo = isTrue ? 'yes' : 'no'; 
