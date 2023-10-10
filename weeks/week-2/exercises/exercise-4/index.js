// Arrays Exercise

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

console.log("Iteration 01");
const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`);
};
countThem();
console.log("----");

//Enable here
// countThem();

const orderThem = () => {
  console.log(pokemons.sort());
};
orderThem();
console.log("----");

// Enable here
// orderThem();

const flipThem = () => {
  console.log(pokemons.sort().reverse());
};
flipThem();
console.log("----");

//Enable here
// flipThem();



const makeThemBig = (array) => {
  array.forEach(pokemon => {
    console.log(pokemon.toUpperCase());
  });
};
makeThemBig();
console.log("----");

//Enable here
// makeThemBig(pokemons);

const onlyTheBs = (array) => {
  // Use the filter method and check if the item starts with the letter "B"
  const onlyB = array.filter((letter) =>  {return letter.charAt(0) === 'B'})
  //print the results to console
  console.log(onlyB);
};
onlyTheBs();

//Enable here
// onlyTheBs(pokemons);

const notTheCs = (array) => {
  // remove all pokemons that starts with C
  //Use filter method to weed out pokemons starting with "C"
  return array.filter((letter) => letter.charAt(0) !== 'C');
};
notTheCs();
console.log("----");

// Enable here
// console.log(notTheCs(pokemons));

const nameAndIdThanks = (array) => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  // Use a forEach loop with index parameter to loop over and log every Pokemon
  array.forEach((pokemon, index) => {
    console.log(`Nr. ${index + 1} - ${pokemon}`);
  });
};
nameAndIdThanks();
console.log("----");

// Enable here
// nameAndIdThanks(pokemons);

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  // Add a new pokemon called 'Babaganosh' to the array using .push()
  pokemons.push("Babaganosh");
  console.log(pokemons);
};
catchPokemon("Raichu");
console.log(pokemons);
console.log("----");

//Enable here
// catchPokemon(); 

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  // Use includes() to check if I caught picachu
  pokemons.includes(name) ? 
  console.log(`Sorry, you haven't caught ${name.toUpperCase()}`):
  console.log(`Yes! You caught ${name.toUpperCase()}!`);
};
didICatchIt("Mewtwo");
console.log("----");

// Enable here
// didICatchIt("pikachu");

const addInThirdPlace = (array) => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  // Use splice() to add "Clefairy" in the 3rd place of the array
  array.splice(2, 0, "Clefairy");
  console.log(pokemons);
};
addInThirdPlace();
console.log(pokemons);
console.log("----");

// Enable here
// addInThirdPlace(pokemons);

// ***BONUS***
const theLongestName = (array) => {
  // find the pokemon with the longest name
  // Create a variable called highestLetterCount with let to save the .length of the highest letter count
  let highestLetterCount = 0;
  // Create a variable to store the index of the pokemon with the highest letter count
  let indexOfHighestLetterCount;
  // Loop over the array and check if the .length of the pokemon is higher than eralier in the loop
  array.forEach((pokemon, index) => {
    if (pokemon.length > highestLetterCount){
      //Now save the length and index for use in the log
      highestLetterCount = pokemon.length;
      indexOfHighestLetterCount = index;
    }

  })
  console.log(`The pokemon with the most letters (${highestLetterCount}) in their name is *drum roll*: ${array[indexOfHighestLetterCount].toUpperCase()}!`);


};

// Enable here
// theLongestName(pokemons);
