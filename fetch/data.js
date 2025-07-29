//  fetch('data.json')
//   .then(response => response.json())
//   .then(students => {
//     localStorage.setItem("students", JSON.stringify(students));
//     displayStudents(students);
    
//   })

//   .catch(error => {
//     console.log('Failed to load students data', error);
//   }) OR
    const storedData = localStorage.getItem('students');

    if (storedData) {
      displayStudents(JSON.parse(storedData));
    };
function displayStudents(students) {
  const studentList = document.getElementById('students-list');

  students.forEach(student => {
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';

    studentDiv.innerHTML = `
        <strong> Name: </strong> ${student.name}; <br>
         <strong> Course: </strong> ${student.course}; <br>
    
    `;
    studentList.appendChild(studentDiv);
  });
    

 }