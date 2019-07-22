/* Reduce
Reduce method returns a single value e.g. a string, object, number

acc = accumulator - contains the running total
cur = current - represents the current array item

accumulator is like a shopping basket, it contains new array items (groceires)

*/

// Exercise One
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);



// Exercise Two
// Return only the names that start with G
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const gNameCount = names.reduce((count, name ) => {
    if (name[0] === 'G') {
        return count + 1;
    }
    return count; 
}, 0); 

console.log(gNameCount); // Result: 4
