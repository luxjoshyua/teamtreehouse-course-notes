// Using value
<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
$('#color option[value='tomato']'); // selects above

// Using pseudo selectors
$('ul li:first-child[3]'); // selects the third list item

<option value="js puns">Theme - JS Puns</option>
($("#design").val() === "js puns"); // selects above

<option value="heart js">Theme - I &#9829; JS</option>
($("#design").val() === "heart js") // selects above

$("span:contains('demo')"); // element containing the specified text

<label for="name">Name:</label>
$("label[for='name']").focus(); // selects above

<input type="checkbox" name="newsletter" value="Yearly">
$( "input[type=checkbox]" );

<select id="color">
   <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
   <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
   <option value="gold">Gold (JS Puns shirt only)</option
</select>
$('#colors-js-puns option:contains("Cornflower Blue")').attr('selected', 'true'); // selects the first option above, which is the default
in the browser
$('select#color>option:first').attr('selected', true); // also works

<select id="color">
   <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
   <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
   <option value="gold">Gold (JS Puns shirt only)</option
</select>
$('select#color>option:last'); // selects gold


<select id="payment" name="user_payment">
   <option value="select_method">Select Payment Method</option>
   <option value="credit card">Credit Card</option>
   <option value="paypal">PayPal</option>
   <option value="bitcoin">Bitcoin</option>
</select>
$('#payment option[value="select_method"]'); // selects first option
