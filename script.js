// JavaScript prep work for covalence
// Kitchen sink lab
var fullName = "Darius Thomas";
const ageReq= 21
const numOfStates = 50;

var sum = 5 + 4;

console.log(sayHello())

console.log(checkAge('Charles', 21))
console.log(checkAge('Abby',27))
console.log(checkAge('James',18))
console.log(checkAge('John',17))

var favVeggies = ['veg1','veg2','veg3']
for( let i =0; i < favVeggies.length; i++){
    console.log(favVeggies[i]);
}

var arr = [{name:'person1',age:25},{name:'person2',age:20},{name:'person3',age:34},{name:'person4',age:18},{name:'person5',age:21}]
for(let i = 0; i< arr.length; i++){
   console.log(checkAge(arr[i].name,arr[i].age));
}

var length = getLength('Hello World');

if(length % 2 == 0){
    console.log('The world is nice and even');
    }else {
        console.log('The world is an odd place!');
    };

function getLength(str){
    return str.split().length
}
function sayHello(){
    return "Hello World!";
};

function checkAge(name, age){
    if( age < ageReq){
        return "Sorry " + name + ", you aren't old enough to view this page!";
    }else {
        // added else statement to remove undefined in console
        return "Hey " + name + ", Welcome!"
    }
};