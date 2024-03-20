//a)

let number;
console.log(typeof(number)); //undefined

const result1 = 10 + number;

console.log(typeof(result1)); //number

console.log("Result1:", result1); //NaN

number = null;
console.log(typeof(number)); //Object

const result2 = 10 + number; 

console.log("Result2:", result2); //10

number = {testi: "testi"};

const result3 = 10 + number;

console.log("Result3:", result3); //10[object Object]

// Kun number-muuttuja alustetaan, ei määritetä mitä tyyppiä se on, eli se on
// määrittämätön; 'undefined'. Kun result1 luodaan, yritetään yhdistää numeroa (10)
// ja määrittämätöntä. Tämä johtaa siihen, että tulos on ei-numero; 'NaN'.
// Kun number-muuttuja uudelleen määritellään nulliksi, se muuttuu samalla objektiksi.
// Tein vielä kolmannen testin jossa tutkin miten javascript käsittelee objecteja.
// Null-objekti lasketaan nollaksi, mutta muuten js concatenoi numeron perään.
// [object Object]. Mielenkiintoista.

// b)
const a = true;
const b = false;

const c = a + b;
const d = 10 + a;
const e = 10 + b;

console.log("c:", c, "is typeof", typeof(c));
console.log("d:", d, "is typeof", typeof(d));
console.log("e:", e, "is typeof", typeof(e));

// Booleanit ovat muistissa bittiarvoina tosi == 1, epätosi == 0. D ja e yhdistävät
// numeron booleaniin. C ei laske booleaneja yhteen vaan tekee loogisen operaation, 
// mahdollisesti OR. En tutki minkä, koska ei noin saa tehdä. XD