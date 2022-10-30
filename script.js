// Functions

// task1
const numberToString = (n) => {
  let string = n.toString();
  return string;
};

console.log(`${numberToString(45)} ,the number as a string`);
console.log(typeof numberToString(44));

// task2

const increaseN = (n) => (number = n + 1);

console.log(increaseN(8));

// task3

const decreaseN = (n) => (number = n - 1);

console.log(decreaseN(65));

// task4

const add = (x, y) => {
  let sum = x + y;
  return sum;
};

console.log(`${add(4, 6)}, the sum `);

//task5

const subtract = (x, y) => x - y;
console.log(`${subtract(5, 6)}, the diference`);

//task6

const multiply = (x, y) => x * y;

console.log(`${multiply(12, 3)}, the product`);

//task7

const divide = (x, y) => {
  if (y != 0) {
    return x / y;
  } else {
    return `divider can't be ${y}`;
  }
};

console.log(`${divide(8, 1)}, the quotient`);

//task8

const square = (x) => {
  return x * x;
};

console.log(`${square(6)}, squaredyhhhhhg`);

//task9

const calculate = (operation, x, y) => {
  let result;
  switch (operation) {
    case "add":
      result = add(x, y);
      break;

    case "subtract":
      result = subtract(x, y);
      break;
    case "multiply":
      result = multiply(x, y);
      break;

    case "divide":
      result = divide(x, y);
      break;
  }
  return result;
};

console.log(calculate("add", 6, 3));

//task 10

const isGreaterThan = (a, b) => (a !== b && a > b ? true : false);

console.log(`${isGreaterThan(12, 9)}, a is greater than b`);

//task 11

const isLessThan = (a, b) => (a !== b && a < b ? true : false);

console.log(`${isLessThan(8, 8)}, a is smaller then b`);

//task 12

const areEqual = (a, b) => (a == b ? true : false);

console.log(`the numbers are equal, ${areEqual(8, 8)}`);

//task 13

const minimum = (x, y) => {
  let number = isLessThan(x, y) ? x : y;
  return number;
};

console.log(`${minimum(7, 12)}, is the smallest number`);

//task 14

const maximum = (x, y) => {
  let number = isGreaterThan(x, y) ? x : y;
  return number;
};
console.log(`${maximum(12, 9)}, is the largest number`);

//task 15

const isEven = (n) => (n % 2 == 0 ? true : false);
console.log(`the number is even, ${isEven(7)}`);

//task 16

const isOdd = (n) => (n % 2 !== 0 ? true : false);
console.log(`the number is odd, ${isOdd(9)}`);

//task 17

const letterGrade = (score, total) => {
  let grade = "";
  score = divide(score, total) * 100;
  console.log(score);
  if (isLessThan(score, 60)) {
    grade = "F";
  } else if (isLessThan(score, 70)) {
    grade = "D";
  } else if (isLessThan(score, 80)) {
    grade = "C";
  } else if (isLessThan(score, 90)) {
    grade = "B";
  } else {
    grade = "A";
  }
  console.log(grade);

  return grade;
};

console.log(
  `${letterGrade(280, 350)}, the score represented as a letter grade`
);

//task 18

const combine = (word1, word2) => {
  return word1.concat(" ", word2);
};

console.log(`${combine("Hello", "World!")}, words joined with a space`);

//task 19

const createCircle = (radius) => {
  let circle = {
    circumferance: 2 * radius * Math.PI,
    area: square(radius) * Math.PI,
  };
  return circle;
};

console.log(createCircle(5));

//arrays

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
// task1 map

const names = characters.map((obj) => obj.name);

console.log(names, "array maped of names");

const heights = characters.map((obj) => obj.height);

console.log(heights, "array maped of height");

const nameHeight = characters.map((obj) => {
  return {
    name: obj.name,
    height: obj.height,
  };
});

console.log(nameHeight, "object maped with names and height of characters");

const firstNames = names.map((name) => name.slice(0, name.indexOf(" ")));

console.log(firstNames, "array maped only first names of characters");

//task2 reduce

const massSum = characters.reduce((total, hero) => (total += hero.mass), 0);

console.log(massSum, "array reduced to sum of mass");

const heightSum = characters.reduce((total, hero) => (total += hero.height), 0);

console.log(heightSum, "array reduced to sum of height");

const countColor = characters.reduce((color, hero) => {
  if (color[hero.eye_color]) {
    color[hero.eye_color]++;
    console.log(color);
  } else {
    color[hero.eye_color] = 1;
  }
  // console.log(color);
  return color;
}, {});

console.log(countColor, "object reduced on eyes color and count");

const countCharacters = names.reduce(
  (total, name) => (total += name.length),
  0
);

console.log(countCharacters, "array reduced to lenght of characters names");

//filter

const massOver = characters.filter((hero) => hero.mass > 100);

console.log(massOver, "array filtered by the mass of characters");

const heightOver = characters.filter((hero) => hero.height < 200);

console.log(heightOver, "array filtered by the height of characters");

const maleHero = characters.filter((hero) => hero.gender == "male");

console.log(maleHero, "array filtered by the gender of characters");

const femaleHero = characters.filter((hero) => hero.gender == "female");

console.log(femaleHero, "array filtered by the gender of characters");

//sort

const massSort = characters.sort((a, b) => a.mass - b.mass);

console.log(massSort, "sorted by mass");

const heightSort = characters.sort((a, b) => b.height - a.height);

console.log(heightSort, "sorted by height");

const nameSort = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(nameSort, "sorted by name");

const genderSort = characters.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
});
console.log(genderSort, "sorted by gender");

//every

const allEyes = characters.every((obj) => obj.eye_color == "blue");

console.log(allEyes, "every method on eyes");

const overMass = characters.every((obj) => obj.mass > 40);

console.log(overMass, "every method on mass");

const heightLess = characters.every((obj) => obj.height < 200);

console.log(heightLess, "every method on height");

const everyGender = characters.every((obj) => obj.gender == "male");

console.log(everyGender, "every method on gender male");

//some

const someMale = characters.some((obj) => obj.gender == "male");

console.log(someMale, "some method on male gender");

const someEyeColor = characters.some((obj) => obj.eye_color == "blue");

console.log(someEyeColor, "some method on blue eye color");

const someHeight = characters.some((obj) => obj.height > 210);

console.log(someHeight, "some method on height");

const someMass = characters.some((obj) => obj.mass < 50);

console.log(someMass, "some method on mass of characters");
