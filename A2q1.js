const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

readline.question('Enter the length of the first side: ', (side1) => {
    readline.question('Enter the length of the second side: ', (side2) => {
        readline.question('Enter the length of the third side: ', (side3) => {
            console.log(`The triangle is ${triangleType(parseFloat(side1), parseFloat(side2), parseFloat(side3))}`);
            readline.close();
        });
    });
});
