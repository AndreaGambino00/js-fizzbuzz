
//Scrivi un programma che stampi i numeri da 1 a 100
var elementi = 100;
var numeri = [];
var flag = false;

for (var i = 0; i < elementi; i++) {
    numeri[i] = i + 1;

    if (numeri[i] % 5 == 0 && numeri[i] % 3 == 0) {             //fizzbuzz.
        numeri[i] = 'FizzBuzz';
        flag = true;
    }
    else if (numeri[i] % 3 == 0) {                              //“Fizz”
        numeri[i] = 'Fizz';
        flag = true;
    }
    else if (numeri[i] % 5 == 0){                               //Buzz.
        numeri[i] = 'Buzz';
        flag = true;
    }
}

console.log(numeri)
