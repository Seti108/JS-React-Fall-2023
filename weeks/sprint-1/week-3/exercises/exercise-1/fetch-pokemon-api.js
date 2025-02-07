// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

// Usha, Daniel, Sebastian

const image = document.getElementById("image");
// console.log(image);
const pokemonName = document.getElementById("name");
const element = document.getElementById("element");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function
/*
// const asyncFunction = async() => {
// 	try {
// 		const response = await fetch(URL);
// 		const data = await response.json();
// 		//Do something here
// 	} catch (error) {
// 		console.log('This is the error: ' error)
// 	}
// }
*/

// let dataGlobal;

// const fetchPokemons = async () => {
//   /*Fetch all pokemons here*/
//   try {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data = await response.json();
//   console.log(data.results);
//   dataGlobal = data;
//  }  
//   catch(error) {
//     console.log('Something went wrong', error)
//   }
// };

//fetchPokemonsTryCatch();

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.

      // console.log(data.result);

//    b) Log only the name of the first pokemon in the
//    pokemon objects array

// const fetchPokemons = async () => {
//   /*Fetch all pokemons here*/
//   try {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data = await response.json();
//   console.log(data.results[0].name);
//  }  
//   catch(error) {
//     console.log('Something went wrong', error)
//   }
// };

// fetchPokemons();


//    c) Log the names of all pokemons in the array

// const fetchPokemons = async () => {
//   /*Fetch all pokemons here*/
//   try {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data = await response.json();
//   console.log(data.results[0].name);
//   data.results.forEach((pokemon => {
//    console.log(pokemon.name) 
//   }))
//  }  
//   catch(error) {
//     console.log('Something went wrong', error)
//   }
// };
// fetchPokemons()

// 3) You might know that there are more than 20 pokemons
//    in the pokedex (1050 to be exact). Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.

// const fetchPokemons = async () => {
//   /*Fetch all pokemons here*/
//   try {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   const data = await response.json();
//   console.log(data)
//  }  
//   catch(error) {
//     console.log('Something went wrong', error)
//   }
// };
// fetchPokemons()

// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.

// const fetchBulbasaurData = async () => {
//   try {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//       const data = await response.json();
//       console.log(data);
//      }  
//       catch(error) {
//         console.log('Something went wrong', error);
//       }
//   }

//   fetchBulbasaurData();

//     const responseFromApi = await fetch(pokemonById);
//     const individualPokemon = await responseFromApi.json();

//     const pokeApi = individualPokemon;
//     console.log(pokeApi);

//     // Save data in respective variables
//     const nameValue = pokeApi.name;
//     const heightValue = pokeApi.height;
//     const weightValue = `${pokeApi.weight} KG's`;
//     const typesValue = pokeApi.types.map((type) => type.type.name);
//     const strengthValue = pokeApi.id;
//     const pokemonImage = pokeApi.sprites.front_default;

//     // Example usage: Display the values in the console
//     console.log(nameValue);
//     console.log(heightValue);
//     console.log(weightValue);
//     console.log(typesValue);

//     // Example usage: Display the values in HTML elements
//     name.textContent = nameValue;
//     height.textContent = heightValue;
//     weight.textContent = weightValue;
//     types.textContent = typesValue.join(", ");
//     element.textContent = strengthValue;
//     image.src = pokemonImage;
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchCharizardData();

// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
      // data.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.

// const fetchBulbasaurData = async () => {
//   try {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//       const data = await response.json();
//       console.log(data);
//       image.src = data.sprites.front_default;
//      }  
//       catch(error) {
//         console.log('Something went wrong', error);
//       }
//   }

//   fetchBulbasaurData();

  
// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array
const fetchBulbasaurData = async () => {
  try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      const data = await response.json();
      console.log(data);
      image.src = data.sprites.front_default;

      console.log(data.name);
      pokemonName.textContent = data.name;
      console.log(data.stats[1].base_stat);

      element.textContent = data.stats[1].base_stat;
     }  
      catch(error) {
        console.log('Something went wrong', error);
      }
  }

  // fetchBulbasaurData();
// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link

const fetchPokemonDataReusable = async (pokemonId) => {
  try {
    let pokemonById = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    const responseFromApi = await fetch(pokemonById);
    const individualPokemon = await responseFromApi.json();

    const pokeApi = individualPokemon;
    console.log(pokeApi);

    // Save data in respective variables
    const nameValue = pokeApi.name;
    const heightValue = pokeApi.height;
    const weightValue = `${pokeApi.weight} KG's`;
    const typesValue = pokeApi.types.map((type) => type.type.name);
    const strengthValue = pokeApi.id;
    const pokemonImage = pokeApi.sprites.front_default;

    // Example usage: Display the values in the console
    console.log(nameValue);
    console.log(heightValue);
    console.log(weightValue);
    console.log(typesValue);

    // Example usage: Display the values in HTML elements
    name.textContent = nameValue;
    height.textContent = heightValue;
    weight.textContent = weightValue;
    types.textContent = typesValue.join(", ");
    element.textContent = strengthValue;
    image.src = pokemonImage;
  } catch (error) {
    console.log(error);
  }
};

// const userInput = prompt("Enter the Pokemon ID:");
// fetchPokemonDataReusable(userInput);

// Function to be attached as event listener
const handleButtonClick = () => {
  const userInput = prompt("Enter the Pokemon ID:");
  fetchPokemonDataReusable(userInput);
};