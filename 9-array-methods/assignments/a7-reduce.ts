{
    // 1)
    const total = (array: number[]) => array.reduce((sum, currentNumber) => sum + currentNumber);
    console.log(total([1, 2, 3])); // 6

    // 2)
    const stringConcat = (array: number[]) => array.reduce((concatString, currentValue) => concatString + currentValue.toString(), "");
    console.log(stringConcat([1, 2, 3])); // "123"

    // 3)
    type voter = {
        name: string,
        age: number,
        voted: boolean
    }

    const voters = [
        { name: 'Bob', age: 30, voted: true },
        { name: 'Jake', age: 32, voted: true },
        { name: 'Kate', age: 25, voted: false },
        { name: 'Sam', age: 20, voted: false },
        { name: 'Phil', age: 21, voted: true },
        { name: 'Ed', age: 55, voted: true },
        { name: 'Tami', age: 54, voted: true },
        { name: 'Mary', age: 31, voted: false },
        { name: 'Becky', age: 43, voted: false },
        { name: 'Joey', age: 41, voted: true },
        { name: 'Jeff', age: 30, voted: true },
        { name: 'Zack', age: 19, voted: false }
    ];

    const totalVotes = (voters: voter[]) => voters.reduce((totalVotes, voter: voter) => {
        if (voter.voted) {
            return totalVotes + 1
        } else
            return totalVotes;
    }, 0)
    console.log(totalVotes(voters)); // 7

    // 4)
    const wishlist = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ];

    const shoppingSpree = (wishlist: { title: string, price: number }[]) =>
        wishlist.reduce((totalCost, item) => totalCost + item.price, 0);

    console.log(shoppingSpree(wishlist)); // 227005

    // 5)
    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ];

    const flatten = (arrays: any[]) => arrays.reduce((flatArray, array) => flatArray.concat(array), []);

    console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



    // 6)
    // Given an array of potential voters, return an object representing the results of the vote.
    // Include how many of the potential voters were in the ages 18-25, how many from 26-35, how
    // many from 36-55, and how many of each of those age ranges actually voted. The resulting
    // object containing this data should have 6 properties.

    const voterResults = (voters: voter[]) => {
        const youngVoters = voters.filter(voter => 18 <= voter.age && voter.age <= 25);
        const midVoters = voters.filter(voter => 26 <= voter.age && voter.age <= 35);
        const oldVoters = voters.filter(voter => 36 <= voter.age && voter.age <= 55);

        return {
            numYoungVotes: youngVoters.reduce((voterCount, voter) => voterCount + Number(voter.voted), 0),
            numYoungPeople: youngVoters.length,
            numMidVotesPeople: midVoters.reduce((voterCount, voter) => voterCount + Number(voter.voted), 0),
            numMidsPeople: midVoters.length,
            numOldVotesPeople: oldVoters.reduce((voterCount, voter) => voterCount + Number(voter.voted), 0),
            numOldsPeople: oldVoters.length
        };

    }

    const votingTendencies = voterResults(voters);
    console.log(votingTendencies); // Returned value shown below:
    /*
    { numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4 
    }
    */

}