// function

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello('gt', 32);
sayHello('ny', 28);


function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
plus(8, 50);


function divide(a, b){
    console.log(a / b);
}
divide(98, 10);



const player = {
    name: 'gt',
    sayBye: function(otherPerson){
        console.log("Bye " + otherPerson + " see you later!");
    },
};
console.log(player.name);
player.sayBye("karina");




const calculator1 = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    times: function(a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    power: function(a, b){
        console.log(a ** b);
    }
};
calculator1.plus(8, 2);
calculator1.minus(8, 2);
calculator1.times(8, 2);
calculator1.divide(8, 2);
calculator1.power(8, 2);



// return
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2; // return이 수행되고 function은 종료된다.
}
const age = 30;
const krAge = calculateKrAge(age);
console.log(krAge);



const calculator2 = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
};
const plusResult = calculator2.plus(8, 2);
console.log(plusResult);
const minusResult = calculator2.minus(plusResult, 2);
console.log(minusResult);
const timesResult = calculator2.times(8, minusResult);
console.log(timesResult);
const divideResult = calculator2.divide(timesResult, plusResult);
console.log(divideResult);
const powerResult = calculator2.power(divideResult, 2);
console.log(powerResult);