{
  const scoreLookup: Record<string, number> = {
    S: 8,
    A: 6,
    B: 4,
    C: 3,
    D: 2,
    F: 0,
  };

  const calculateTotalScore = (scoreSequence: string) => {
    const scores = scoreSequence.split("");
    return scores.reduce(
      (totalScore, grade) => totalScore + scoreLookup[grade],
      0
    );
  };

  const calculateAverageScore = (scoreSequence: string) =>
    calculateTotalScore(scoreSequence) / scoreSequence.length;

  const totalScore = calculateTotalScore("DFCBDABSB");
  console.log(totalScore); // prints 33
  const averageScore = calculateAverageScore("DFCBDABSB");
  console.log(averageScore); // prints 3.6666666666666665
  const scoreSequences = ["AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC"];

  const averageScores = scoreSequences.map(scoreSequence => calculateAverageScore(scoreSequence));
  console.log(averageScores);
  
}
