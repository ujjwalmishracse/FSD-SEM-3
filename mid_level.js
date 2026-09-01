//Global scope variable
let a = 10;

console.log(a);

function test() {
    console.log(a);
}

test();

//function scope variable

function test2() {
    let b = 20;
    console.log(b);
}

test2();


//Block scopre variable
if (true) {
    let c = 30;
    let d = 40;
    console.log(d);
}
