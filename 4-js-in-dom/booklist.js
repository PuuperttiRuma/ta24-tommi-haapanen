"use strict";

const books = [
  {name: "Dune", pageCount: 412},
  {name: "The Eye of the World", pageCount: 782},
  {name: "Red Rising", pageCount: 416}
];

const booklist = document.getElementById("booklist");
const addBookForm = document.getElementById("addBookForm");
const bookInput = document.querySelector("#bookName");
const pageCountInput = document.querySelector("#pagecount");

const addBook = (event) => {
  event.preventDefault();
  const newBook = {name: bookInput.value, pageCount: pageCountInput.value};
  books.push(newBook);
  showBookList();
};

const showBookList = () => {
  const liArray = [];
  books.forEach(book => {
    const li = document.createElement("li");
    const text = document.createTextNode(`${book.name} (${book.pageCount} pages)`);
    li.appendChild(text);
    li.classList.add("list-group-item");
    liArray.push(li);
  });
  booklist.replaceChildren(...liArray);
};

window.onload = showBookList;
addBookForm.addEventListener("submit", addBook);
