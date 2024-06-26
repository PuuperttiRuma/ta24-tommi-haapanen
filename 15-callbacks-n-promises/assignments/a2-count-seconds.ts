// a)
// Create an async function waitFor that takes in a number (milliseconds) as a parameter.
// When called, the function must wait for the specified amount of time to pass before returning, without doing anything else.
// Tip: setTimeout wrapped in a Promise + await.
// b)
// Create an async function countSeconds that prints numbers from 0 to 10.
// Between printing each number, the program must call waitFor and await the function to complete. This makes the program wait exactly 1 second before printing the next number.
// Call your countSeconds function. If you did these steps correctly, your program should print numbers from 0 to 10, with a delay of 1 second between each number appearing on the terminal.

const waitFor = async (milliseconds: number) => {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const countSeconds = async () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
    await waitFor(1000);
  }
};

countSeconds();
