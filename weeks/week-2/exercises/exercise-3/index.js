// Loops & Objects Exercise


const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

// Create a function that loops over the array and prints every entry
const printPokemons = function(array){
  array.forEach(element => {
    console.log(element);
  });
}
//Enable here 
// printPokemons(pokemons);

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const pichachu = {
  name: 'Picachu',
  element: 'fire',
  strength: '3',
  color: 'yellow',
  sound: 'Weeeiii'
}

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

//Enable here
// console.log(`${pichachu.name} is a ${pichachu.element} pokemon with the strength of ${pichachu.strength}`);

// 4)
// Add the property stillToCatch: true to the Pikachu object.



// 5)
// change the value of the key strength in the Pikachu object.

// 6)
// Delete a property from the Pikachu object.
delete pikachu.strength;

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13,
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32,
  },
];

// 8)
// Print out all the NAMES of the pokemons in this new array.

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.
