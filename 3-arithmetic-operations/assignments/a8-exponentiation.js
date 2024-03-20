const player1 = {
  income: 100
};
const player2 = {
  income: 400
};

const tax = (player, taxrate) => {
  const newIncome = Math.round(player.income **= taxrate);
  player.income = newIncome;
}

console.log(`Difference between player incomes: ${Math.abs(player1.income - player2.income)}.`);
tax(player1, 0.9);
console.log(`Player 1 income after tax: ${player1.income}`);
tax(player2, 0.9);
console.log(`Player 2 income after tax: ${player2.income}`);
console.log(`Difference in incomes after taxing: ${Math.abs(player1.income - player2.income)}.`);

