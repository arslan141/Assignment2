
function isPrime(num) {
    if (num <= 1) return false;
    if(num<=3) return false;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}


function primeFactorials(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(`The factorial of prime number ${i} is ${factorial(i)}`);
        }
    }
}


primeFactorials(1, 100);
