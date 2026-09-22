const student = {
    name: "Jackob"
};

function show() {
    
    console.log("student:", this.name);
}

const newfunction = show.bind(student);

newfunction();