console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function(plusNumber) {
        return number + plusNumber;
    }
};

const plus15 = plus(15);
console.log(plus15(10));


// Exercises 2-6
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];


// Exercise 2 - forEach (print the names)
users.forEach((user) => console.log(user.name));

// Exercise 3 - map (return a new array just containing objects with names and scores.)
console.log("EXERCISE 3:\n==========\n");

let nameScore = users.map((user) => {
    return {name: user.name, score: user.score};
});

console.log(nameScore);

// Exercise 4 - filter (return a new array that only contains users that are listed as active.)
console.log("EXERCISE 4:\n==========\n");

let filteredUsers = users.filter((user) => {
    return user.isActive === true;
});

console.log(filteredUsers);

// Exercise 5 - sort (sort the users array in-place with the users sorted in descending order by score.)
console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => a.score - b.score); 
users.reverse();

console.log(users);

// Exercise 6 - reduce (return sum of all users' scores. Once you have the sum of all scores, find the average score from the users.)
console.log("EXERCISE 6:\n==========\n");

let sum = users.reduce((total, value) => total + value.score, 0);
let average = sum / users.length;

console.log(average);