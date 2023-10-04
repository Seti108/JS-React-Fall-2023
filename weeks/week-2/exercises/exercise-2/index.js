// Functions + Conditionals Exercise

/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Nella and the navigator Tom" 
Where Nella represents the first argument passed in and Tom the second.
When you've set that up, invoke the function to see if it works.
*/

function theCoders(driver, navigator){
  console.log(`The awesome coders for today is the driver ${driver} and the navigator ${navigator}`);
  console.log(nameLength(driver, navigator));
}

// Activate the functionality here
// theCoders('Nella', 'Tom');

/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

// theCoders('Nella');

/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */

// Make a new function that checks the arguments .length and compares them.

function nameLength (name1, name2){
  if (name1.length > name2.length){
    return `The driver (${name1}) has the longest name. Sorry ${name2}.`
  } else if (name1.length < name2.length){
    return `The navigator (${name2}) has the longest name. Sorry ${name1}.`
  } else {
    return `The driver and the navigator has equally long names.`
  }
}


/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */
const userAge= function(){
  const age = prompt('Write your age. Don\'t be shy');
  if(age > 18 && age < 30){
    console.log('You got the world by the balls!');
  } else if (age >= 30 && age < 50 ) {
    console.log('These are the best days of your life. Take good care of them.');
  } else if (age > 50) {
    console.log('With age comes wisdom and clarity. Find out what matters most for you and pursue that!');
  } else {
    alert('Age\'s just a number, right?');
  }
}
//Activate the functionality here
// userAge();


  /*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */

// Make a prompt with the math task of 25 / 5

// const mathTask = prompt('What is  25 / 5?');

// Make a function that checks if the answer is 5

const checkMathTask = function (answer) {
  const integerAnswer = Number(answer);

  if (integerAnswer === 5) {
    alert('Thats\'s right! Well done.')
  } else {
    alert('Sorry, that\'s not the right answer. It should be 5.')
  }
}

// Enable functionality here
// checkMathTask(mathTask);

/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */

//Generate a random math problem in the range of 0 - 10, also store the answer in a variable
let mathTaskAnswer = 0;

const generateMathTask = function () {
  const integer1 = Math.floor(Math.random() * 10 + 1);
  const integer2 = Math.floor(Math.random() * 10 + 1);
  mathTaskAnswer = integer1 * integer2;
  return ` What is ${integer1} * ${integer2}?`
}

// Make a prompt giving the math problem

// Enable here
// const mathTaskBonusQuery = Number(prompt(generateMathTask()));

// Make a function that checks if the answer is correct and tells the user the right answer if its not

const checkMathTaskBonus = function (answer) {
  if (answer === mathTaskAnswer) {
    alert('Thats\'s right! Well done.')
  } else {
    alert(`Sorry, that\'s not the right answer. It should be ${mathTaskAnswer}.`)
  }
}

//Enable here
// checkMathTaskBonus(mathTaskBonusQuery);