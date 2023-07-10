const phone = { brand: 'samssung', model: 's20', price: 50900 };

// destruction
const { model, price } = phone;
// console.log(model, price);


const company = {
    name: 'GP',
    department: {
        firstDepartment: 'Web Development',
        secondDepartment: 'Network',
        tech: {
            frame: 'react',
            db: 'mongo',
        },
    },
}

// destruction
const { name } = company;
const { firstDepartment, secondDepartment } = company.department;
const { frame, db } = company.department.tech;

console.log(name, firstDepartment, db);