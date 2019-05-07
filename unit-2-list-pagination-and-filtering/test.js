const taxRate = 8.5;

function calculateTax(cost, tax) {
    taxRate = tax;
    return (cost * taxRate) / 100;
}

console.log(calculateTax(100, 10)); 

// Syntax error: Assignment to constant variable