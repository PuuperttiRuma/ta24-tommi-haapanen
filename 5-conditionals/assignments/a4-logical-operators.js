const games = [
    {
        title: "Score 5, p/t 2",
        score: 5,
        hoursPlayed: 40,
        price: 20,
    },
    {
        title: "Score 5, p/t 1",
        score: 5,
        hoursPlayed: 5,
        price: 5,
    },
    {
        title: "Score 4, p/t 2",
        score: 4,
        hoursPlayed: 20,
        price: 10,
    },
    {
        title: "Score 4, p/t 5",
        score: 4,
        hoursPlayed: 50,
        price: 10,
    },
    {
        title: "Score 3, p/t 100",
        score: 4,
        hoursPlayed: 100,
        price: 1,
    },
    {
        title: "Score 4, free",
        score: 4,
        hoursPlayed: 1,
        price: 0,
    },
];

// Game is worth it if:
// its score is at least 4 and it is free
// its score is 4 and its ratio of hours played to price is at least 4
// its score is 5 and its ratio of hours played to price is at least 2

const wasWorthIt = (game) => {
    if (game.score >= 4 && game.price === 0){
        return true
    }
}

games.forEach(game => {
    const verdict = true;
    console.log(`Game "${game.title} was ${verdict} it.`);
    
});