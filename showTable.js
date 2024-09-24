function getStudents() {
    let listStudents = localStorage.getItem('listStudents');

    return listStudents
        ? JSON.parse(listStudents)
        : [];
}

function showStudents(students) {
    const tbody = document.querySelector("#tableStudent tbody");
    tbody.innerHTML = ''; 

    students.forEach(student => {
        const row = document.createElement("tr");

        const fileCell = document.createElement("td");
        fileCell.textContent = student.file;
        row.appendChild(fileCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = student.lastName;
        row.appendChild(lastNameCell);

        tbody.appendChild(row);
    });
}

function filterStudentsByLastName() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const allStudents = getStudents();
    
    const filteredStudents = allStudents.filter(student => 
        student.lastName.toLowerCase().includes(searchInput)
    );

    showStudents(filteredStudents);
}

document.getElementById('searchButton').addEventListener('click', filterStudentsByLastName);

document.addEventListener('DOMContentLoaded', () => {
    showStudents(getStudents());
});