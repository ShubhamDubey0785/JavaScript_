console.log("This is lecture number 53 of javaScript")
function greet(name,greetText="Greeting from JavaScript"){
    let name1="Name one is this"
    console.log(greetText+" "+name);
    console.log(name+ " is a good boy");
}
let name="Aman"
let name1="Shubham"
let name2="Rohan"
let name3="Sagar"
let greetText1="Good Morning"
greet(name);
greet(name1,greetText1);
greet(name2,greetText1);
greet(name3,greetText1);

function sum(a,b,c){
    let d=a+b+c
    return d
}
let returnVal=sum(1,2,3);
console.log(returnVal)