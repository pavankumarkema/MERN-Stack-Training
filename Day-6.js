/****************************************
 * Day-6 JavaScript Concepts
 * Arrays | Functions | DOM | Render
 ****************************************/

console.log("Day-6 JavaScript Loaded");

/* -------------------------------------
   1. ARRAYS (Basic Example)
------------------------------------- */

let numbers = [10, 20, 30, 40];
console.log("Array:", numbers);


/* -------------------------------------
   2. TYPES OF FUNCTIONS
------------------------------------- */

// Normal Function
function greet() {
    console.log("Hello from normal function");
}
greet();

// Arrow Function
const sayHi = () => {
    console.log("Hello from arrow function");
};
sayHi();


/* -------------------------------------
   3. DOM SELECTION (querySelectorAll)
------------------------------------- */

// Selecting all containers (ARRAY / NodeList)
const containers = document.querySelectorAll(".container");
console.log("Containers:", containers);

// Looping using forEach (Array concept)
containers.forEach(item => {
    item.style.background = "red";   // DOM manipulation
    item.style.color = "white";      // Render happens here
});


/* -------------------------------------
   4. BUTTON DOM + ARRAY + FUNCTION
------------------------------------- */

// Selecting all buttons
const buttons = document.querySelectorAll("button");
console.log("Buttons:", buttons);

// Looping buttons array
buttons.forEach(btn => {
    btn.style.color = "blue";

    // Event handling (extra concept)
    btn.addEventListener("click", () => {
        alert("Button clicked!");
    });
});


/* -------------------------------------
   5. RENDERING EXPLANATION (LOGICAL)
------------------------------------- */

// When JavaScript changes style or content
// Browser redraws the UI
// This process is called RENDERING

console.log("DOM updated and rendered on screen");
