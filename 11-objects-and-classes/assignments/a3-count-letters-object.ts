{
  const getCountOfLetters = (string: string) => {
    const characters = string.split("");
    const countsOfLetters: { [letter: string]: number } = {};
    characters
      .filter((char) => char !== " ")
      .sort()
      .forEach((char) => countsOfLetters[char] = (countsOfLetters[char] || 0) + 1);
    return countsOfLetters;
  };

  const result = getCountOfLetters("a black cat");
  console.log(result);
  /* prints 
{
	a: 3,
	b: 1,
	c: 2,
	k: 1,
	l: 1,
	t: 1
}
*/
}
