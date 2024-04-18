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



const handleButtonClick = () => {
  console.log("Button clicked!");
  const studentTable = document.createElement("table");
  const studentTableBody = document.createElement("tbody");
  studentsContainer.appendChild(studentTable);
  studentTable.appendChild(studentTableBody);
  // students.forEach
  // const newHtmlChild = htmlParent.createElement("li");
};

toggleStudentsButton.addEventListener("click", handleButtonClick());
