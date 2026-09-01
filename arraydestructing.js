//Array destructing


let marks = [80,85,90];

let [java,python,js] = marks;

console.log(java);

console.log(python);

console.log(js);     

//object destructing

let emplyoee = {

    id: 101,

    name: "Virat",

    salary: 50000

};

let {id, name, salary} = emplyoee;

console.log(id);

console.log(name);

console.log(salary);


//spread operator(...)

let arr1=[1,2,3];

let arr2=[...arr1,5,6];

console.log(arr2);

//object operator(...) in object

let obj1 = {

    name: "Ujjwal",

    age: 20

};

let obj2 = {

    ...obj1,

    city: "Delhi"

};

console.log(obj2);

//Rest operator (...)
function sum(...numbers){  //...-> rest operator hai
    let total = 0;
    for(let n of numbers){
        total += n;
    }
    return total;
}

console.log(sum(10,20,30,40));

//Arrow function 

const square =number=>number*number;
console.log(square(5)); 

const add = (a,b)=>a+b;
console.log(add(10,20));

const g = (name="vohra")=>{
    console.log(name);

}
g();
g("amit");
//call back function

function display(result){
    console.log(result);

}
function cal(a,b,callback){
    callback(a+b);
}
cal(10,20,display);