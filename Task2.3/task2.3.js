//Task 1: Change the Background Color
//// Create an HTML file with a button. When the button is clicked, change the background color of the page to a random color.

let result = document.getElementById("GFG");
 
function changeColor(color) {
    document.body.style.background = color;
}

function cliced() {
    changeColor('yellow');
    result.innerHTML = "Background Color changed";
}    


// Task 1 end



// Task 2 Create an HTML file with a button and a counter display. When the button is clicked, increment the counter and update the display.

function changeValue(diff) {
  var count = document.getElementById('count');
  count.innerText = +count.innerText + diff;
}

// Task 2 end




// Task 3 Create an HTML element for the image tag and show the screen an image then create a button in HTML and write a function in JS for button click. When click the button change the image source(src) attribute

function myFunction() {
  document.getElementById("myImg").src = "1.child";
}
// Task 3 end











