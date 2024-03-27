{
  const charIndex: Record<string, number> = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  const getCountOfLetters = (string: string) => {
    const stringArray = string.split("");
    const countOfAlphabets = Object.keys(charIndex).length;
    const characterCountArray: number[] = new Array(countOfAlphabets).fill(0);
    for (const char of stringArray) {
      if (char !== " ") {
        characterCountArray[charIndex[char]]++;
      }
    }
    return characterCountArray;
  };

  console.log(getCountOfLetters("a black cat")); // prints [ 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, ... 1, 0, 0, 0, 0, 0, 0  ]
  // corresponding letters:    a  b  c  d  e  f  g, h, i, j, k, l, ... t, u, v, w, x, y, z
}
