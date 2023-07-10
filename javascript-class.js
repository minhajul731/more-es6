class Student {
    id;
    name;
    college = 'Adomji Cant Public School & College';

    // using dynamically value by constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    group() {
        console.log(this.name, 'Group Science');
    }
}

const sabbir = new Student(2001, 'Sabbir');
sabbir.group();
console.log(sabbir);