function sumMultiplesOf3and5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


let limit = 1000;
console.log(`The sum of multiples of 3 and 5 under ${limit} is ${sumMultiplesOf3and5(limit)}`);
