function hello1() {
    console.log('hello');
}
hello1();
console.log('Dojo');


//variable: result      valor: 15

function hello2() {
    console.log('hello');
    return 15;
}

var result = hello2();
console.log('result is', result);

//result is 15

//variable: result      valor: 3  => 18

function numPlus(num) {
    console.log('num is', num);
    return num + 15;
}
var result = numPlus(3);
console.log('result is', result);

//num is 3
//result is 18


//variable: num     valor: 15 
//variable: result  valor: 10

var num = 15;
console.log(num);
function logAndReturn(num2) {
    console.log(num2);
    return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

//15
//10
//10
//15


//variable: num     valor: 15 
//variable: result  valor: 10

var num = 15;
console.log(num);
function timesTwo(num2) {
    console.log(num2);
    return num2 * 2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

//15
//10
//20
//15


//variable: result        valor: 3 => 16
//variable: num           valor: 3 => 5
//varibale: y             valor: 5 => 10



function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num * 2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//num is 3
//num is 5
//result is 16
//sum is 5



//variable: num1              valor: 2 => 3
//variable: num2              valor: 3 => 5

function sumNums(num1, num2) {
    return num1 + num2;
}
console.log(sumNums(2, 3))
console.log(sumNums(3, 5))

//5
//8


//variable:  sum                  valor: 5 => 8
//variable: num1                  valor: 2
//varibale: num2                  valor: 3

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2, 3) + sumNums(3, 5);
console.log('result is', result);

//sum is 5
//sum is 8
//result is 13



//variable: sum           valor: 5
//varibale: num1          valor: 2 => 3  => 2 => 2
//variable: num2          valor: 3 => 3 => 1  => 3

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2, 3) + sumNums(3, sumNums(2, 1)) + sumNums(sumNums(2, 1), sumNums(2, 3));
//               5                 6                            8
console.log('result is', result);
