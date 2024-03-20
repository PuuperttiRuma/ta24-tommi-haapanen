const books = [
  {
    name: "Dune",
    pageCount: 412,
    read: false
  },
  {
    name: "The Eye of the World",
    pageCount: 782,
    read: false
  }
];

console.log(books);

books[0].read = true
books[1].read = true

console.log(books);