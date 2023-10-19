//TEAM SOLUTION
/*
// Select the element with the class "box" and store it in the "box" variable.
const box = document.querySelector(".box");

// console.log("Start Here 😉");

// Order: Sebastian, Usha, Pernilla




Let's use some DOM manipulation to target the div container element with the class of "box" and through 
some DOM manipulation lets change the background color of this element once the user selects a theme from the theme options.

*/
/*
const boxContainer = document.querySelector(".box");

const radioButtons = document.querySelectorAll('input[type="radio"]');




console.log(radioButtons);
function changeBackground() {
    boxContainer.style.backgroundColor = "darkgray";
}
function changeTheme() {
    radioButtons.forEach((radioButton) => {
        const themeSelected = radioButton.value;
        console.log(radioButton);
        if(radioButton.checked) {
            const backgroundColors = {
                dark : 'darkgray',
                light: 'lightgray',
                crazy: 'magenta'};
            // check which button is selected
            boxContainer.style.backgroundColor = themeSelected[backgroundColors];    
        }
        
    })
}

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', changeTheme);
    
})

// changeTheme();

const darkButton = document.getElementById("dark");
darkButton.addEventListener('click', () => {
    // when the radio is changed listen to that event and update the color using background function
    switch(id) {
        case "dark":
            boxContainer.style.backgroundColor = "darkgray";
            break;
        case "light":
            boxContainer.style.backgroundColor = "lightgray";
            break;
        case "crazy":
            boxContainer.style.backgroundColor = "magenta";
            break;
    default:
        boxContainer.style.backgroundColor = "green";
    } 
});

const formTag = document.getElementsByTagName("form");
console.log(formTag);
*/



// TEACHER SOLUTION

/*
// Select the element with the class "box" and store it in the "box" variable.
const box = document.querySelector(".box");

// Select all input elements with the name attribute set to "theme" and store them in the "themeRadios" variable.
const themeRadios = document.querySelectorAll('input[name="theme"]');

// Loop through each radio button in the "themeRadios" NodeList.
themeRadios.forEach((radio) => {
  // Add an event listener to each radio button to listen for the "change" event.
  // This event triggers when the radio button's state changes (i.e., when it's selected).
  radio.addEventListener("change", function () {
    let color; // Declare a variable to store the background color value.

    // Check the value of the currently selected radio button (using 'this') and set the "color" variable accordingly.
    if (this.value === "dark") {
      color = "darkgray";
    } else if (this.value === "light") {
      color = "lightblue";
    } else if (this.value === "crazy") {
      color = "purple";
    } else {
      color = "lightgreen"; // Default color.
    }

    // Add the "color-transition" class to the "box" element.
    // This class presumably contains CSS that provides a smooth color transition effect.
    box.classList.add("color-transition");

    // Change the background color of the "box" element to the value stored in the "color" variable.
    box.style.backgroundColor = color;

    // Set a timeout to execute a function after a delay of 300 milliseconds.
    setTimeout(() => {
      // After the delay, remove the "color-transition" class from the "box" element.
      // This might be done to ensure that subsequent changes to the box's style don't have the transition effect.
      box.classList.remove("color-transition");
    }, 300); // 300 milliseconds delay.
  });
});
 */

// MY SOLUTION

// PROBLEM

// Make the background of the div "box" change background color to the corresponding color once the radio button is changed

//PLAN

// Select the box container and the form element

const box = document.querySelector('.box');
const radioButtons = document.getElementById('form');

// Add a function to change the color using a parameter

function changeThemeColor(color){
  // Write the code to change the background color where the actual color will be the argument in the function
  box.style.background = color;
}

// Set up and event listener that triggers once the radio button is changed, check which theme is selected and create a switch statement that enables the colors with the function

// Listen to the parent element, determine which of the buttons were marked and use an if statement to trigger the changeThemeColor function.
radioButtons.addEventListener('change', function (e) {
    let selecteTarget = e.target.value;
     switch(selecteTarget){
      case 'light':
        changeThemeColor('white');
        break;
      case 'dark':
        changeThemeColor('darkgray');
        break;
      case 'crazy':
        changeThemeColor('purple');
     }
})

