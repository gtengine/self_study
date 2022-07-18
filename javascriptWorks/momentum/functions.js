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