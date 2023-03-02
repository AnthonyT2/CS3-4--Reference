// This function is called with the Start test button is clicked
function start() {
  drawCircle(100, 50, 25, "blue");
  drawCircle(100, 700, 25);
  var x = getWidth() / 2 - 100;
  drawCircle(100, x, 25);
  var color = "purple"
  drawCircle(100, 30, 25, color);
  drawSquare(100, 300, 25, color );
}


// Problem #3 analyze the drawCircle() function below then modify it to take another parameter to specify the color of the circle
function drawCircle(radius, xPos, yPos, color = "red") {
  // Create a <div> element
  var circle = document.createElement("div");
  // Set its position to absolute so we can position it with top and left
  circle.style.position = "absolute";
  // Round over the corners to make it a circle
  circle.style.borderRadius = "100%";
  // Set the size of the element using the radius parameter. The width and height of the element will be the diameter of the circle
  circle.style.minWidth = radius * 2 + "px";
  // Width and height (diameter) are the same for a circle
  circle.style.minHeight = radius * 2 + "px";
  // Set the color
  circle.style.backgroundColor = color;
  // Set the y-position
  circle.style.top = yPos + "px";
  // Set the x-position
  circle.style.left = xPos + "px";
  // Add the element to the graphic container section
  graphicsWindow.appendChild(circle);
}

// Problem #4 Implement the draw square function below
function drawSquare(radius, xPos, yPos, color){
  var square = document.createElement("div")
  square.style.position = "absolute";
  square.style.borderRadius = "0%";
  square.style.minWidth = radius * 2 + "px";
  square.style.minHeight = radius * 2 + "px";
  square.style.backgroundColor = color;
  square.style.top = yPos + "px";
  square.style.left = xPos + "px";
  graphicsWindow.appendChild(square);
}

// Problem #5 Define the drawRect() function below
function drawRect(Width, height, xPos, yPos) {
  var rect = 
}

// Problem #6 Define the randomeCircles() function below






/********************* LOOK BUT DO NOT MODIFY ANYTHING BELOW THIS LINE ******************************************************/
// This is a variable to hold the element we will be using to add graphical components
const graphicsWindow = document.getElementById("graphic-container");

// These functions get the width and heigth of the graphics window
function getWidth(){
  return graphicsWindow.offsetWidth;
}
function getHeight(){
  return graphicsWindow.offsetHeight;
}