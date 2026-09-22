// const student1 = {
//     name: "Edward Cullens",
// };

// const student2 = {
//     name: "Bella Swan",
// };

// function introduce(city) {
//     console.log(`My name is ${this.name} and I live in ${city}`);
// }

// introduce.call(student1, "Arizona");
// introduce.call(student2, "Forks");
const student = {
    name: "Edward Cullens"
};

function introduce(city, age) {
    console.log(`name: ${this.name}`);
    console.log(`city: ${city}`);
    console.log(`age: ${age}`);
}

introduce.apply(student, ["Arizona", 109]);