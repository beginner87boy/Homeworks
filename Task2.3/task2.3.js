//Task 1: Change the Background Color
//// Create an HTML file with a button. When the button is clicked, change the background color of the page to a random color.

let button = document.getElementsByTagName('button')[0];

function RBC (e) {
  button.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

button.addEventListener("click", RBC);
console.log = RBC();


// Task 1 end



// Task 2 


// Task 2 end




// Task 3 


// Task 3 end











