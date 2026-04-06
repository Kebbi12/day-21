function sayHello(){
    console.log("Hello Javascript");
}
sayHello("Hello Javascript")
let greet = document.getElementById("greet").innerHTML = "Hello Javascript"


function sayName(){
    console.log("kebbi peace ebi");
}
sayName("kebbi peace ebi")
let say = document.getElementById("say").innerHTML = "kebbi peace ebi"

function myNumber(){
    console.log("234");
}
myNumber("234")
let num = document.getElementById("num").innerHTML = "234";

function myName(peace){
    console.log("Hello peace");
}
myName("Hello peace")
let my = document.getElementById("my").innerHTML = "Hello peace";


function getLargest(a, b){
    let largest = a > b ? a: b;
    return largest
}
let total = getLargest(18, 6)
console.log("Largest number is:" + total)
let largeNumber = document.getElementById("largeNumber").innerHTML = "Largest number is:" + total;



function getSmallest(a, b){
    let smallest = a < b ? a: b;
    return smallest
}
let tota = getSmallest(6, 18)
console.log("Smallest number is:" + tota)
let smallNumber = document.getElementById("smallNumber").innerHTML = "Smallest number is:" + tota;




function trapezium(a, b, h){
      let area = 0.5 * (a + b) * h;
      return area
}
let result = trapezium(5, 7, 4)
console.log("trapezium:" + result)
let trap = document.getElementById("trap").innerHTML = "trapezium is:" + result;


function celsiusToFahrenheit(celsuis){
    let fahrenheit = (30 * 9/5) + 32;
    return fahrenheit
}
let outcome = celsiusToFahrenheit(30)
console.log("Temperature in Fahrenheit:" + outcome)
let fridge = document.getElementById("fridge").innerHTML = "Temperature in Fahrenheit:" + outcome;


function gramToKilogram(gram){
    let kilogram = 7000 / 1000
    return kilogram
}
let kilo = gramToKilogram(7000)
console.log("Weighht in Kilograms:" + kilo)
let logram = document.getElementById("logram").innerHTML = "Weight in kilograms:" + kilo;


function checkNumber(num){
    if (num > 0){
        message = num + " is positive";
    }else if (num < 0){
        message = num + " is negative";
    }else{
        message = num + " is Zero";
    }
    // return message
    console.log(message);
    let check = document.getElementById("check").innerHTML += message + "<br> <br>";
}
checkNumber(15);
checkNumber(-5);
checkNumber(0);