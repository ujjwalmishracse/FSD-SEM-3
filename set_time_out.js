console.log("java");
setTimeout(() => {
    console.log("after time out");

}, 3000);
console.log()

let count = 1;


let timer = setInterval(() => {
    console.log(count);
    count++;
    if (count == 6) {
        clearInterval(timer);
    }
}, 1000);

//exception handling

// try{
//     let a=10;
//     console.log(b);
// }
// catch(error){
//     console.log("error occured");
//     console.log(error.message);
// }


//custom error

function checkage(age) {

    if (age < 18) {

        throw new Error("age must be greater than 18");

    }
    else {

        console.log("you can vote");

    }
}





















































































































try {

    checkage(15);

}
catch (error) {

    console.log("error occured");
    console.log(error.message);

}