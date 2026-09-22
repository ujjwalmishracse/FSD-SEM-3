function first(){
}
function second(){
    console.log("second");
    third();
}
function third(){
    console.log("third");
    first();
}