"use strict";

const students = [
  { name: "Sami", score: 24.75 },
  { name: "Heidi", score: 20.25 },
  { name: "Jyrki", score: 27.5 },
  { name: "Helinä", score: 26.0 },
  { name: "Maria", score: 17.0 },
  { name: "Yrjö", score: 14.5 },
];

const studentsContainer = document.getElementById("studentsContainer");
const toggleStudentsButton = document.getElementById("toggleStudentsButton");
let studentTable = null;

const createStudentTable = (students) => {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  students.forEach(student => {
    const row = document.createElement("tr");
    Object.keys(student).forEach(key => {
      const cell = document.createElement("td");
      const text = document.createTextNode(student[key]);   
      cell.appendChild(text);
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
  studentsContainer.appendChild(table);
  table.appendChild(tableBody);
  return table;
};

const toggleStudentTable = () => {
  if (!studentTable){  
    studentTable = createStudentTable(students);
    studentsContainer.appendChild(studentTable);
  } else {
    studentsContainer.removeChild(studentTable);
    studentTable = null;
  }
};

toggleStudentsButton.addEventListener("click", toggleStudentTable);
