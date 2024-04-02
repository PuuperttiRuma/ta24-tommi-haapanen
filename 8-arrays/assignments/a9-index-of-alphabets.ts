{
  // type CharIndexMap = {
  //   [key: string]: number;
  // };
  
  const charIndex: Record<string, number> = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const charIndexString = (string: string) => {
    const charArray = string.split("");
    const indexStringArray: string[] = [];
    charArray.forEach((char: string) => {
      indexStringArray.push(charIndex[char].toString());      
    });
    return indexStringArray.join("");
  };

  console.log(charIndexString("bead")); // prints "2514"
  console.log(charIndexString("rose")); // prints "1815195"
}
