interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Babatunde',
    lastName: 'Ibrahim',
    age: 24,
    location: 'Nigeria'
}
const student2: Student = {
    firstName: 'Joe',
    lastName: 'Stephen',
    age: 40,
    location: 'New York'
}

const studentsList: Student[] = [student1, student2]
console.log(studentsList)

// Render a table and append rows for each student
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);