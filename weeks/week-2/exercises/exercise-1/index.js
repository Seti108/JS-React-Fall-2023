// DOM Manipulation Exercise

// console.log("Start Here 😉");

// Order: Sebastian, Usha, Pernilla


/*

Let's use some DOM manipulation to target the div container element with the class of "box" and through 
some DOM manipulation lets change the background color of this element once the user selects a theme from the theme options.

*/

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
/*
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