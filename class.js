class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

const student = new Student("Edward Cullens", 100);

student.display();