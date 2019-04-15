let fullName:string = "Darius Thomas";
const ageReq:number = 21;
const numOfStates:number = 50;

console.log(sayHello())

console.log(checkAge('Charles', 21))
console.log(checkAge('Abby',27))
console.log(checkAge('James',18))
console.log(checkAge('John',17))

let favVegs:Array<string> = ['Carrots','Tomatoes','Potatoes'];

for(let i=0; i< favVegs.length;i++){
    console.log(favVegs[i])
}

let arr:Array<{name:string,age:number}> = [{name:'Mark',age:25},{name:'Li',age:20},{name:'Jessica',age:34},{name:'James',age:18},{name:'Rebbeca',age:21}];
for(let i = 0; i< arr.length; i++){
    console.log(checkAge(arr[i].name,arr[i].age));
 }

 let numOfLetters:number = getLength('Hello World');
 
 if(numOfLetters % 2 == 0){
    console.log('The world is nice and even');
    }else {
        console.log('The world is an odd place!');
    };

    function getLength(str:string):number{
        return str.split("").length
    }
    function sayHello():string{
        return "Hello World!";
    };

 function checkAge(name:string, age:number):string{
    if( age < ageReq){
        return "Sorry " + name + ", you aren't old enough to view this page!";
    }else {
        // added else statement to remove undefined in console
        return "Hey " + name + ", Welcome!"
    }
};