/*************************************
 * Day-7 : DOM, textContent, innerHTML
 *************************************/

// 1. Selecting element by ID
const textVisible = document.getElementById("textVisible");

// Changing text using textContent
textVisible.textContent = "This is visible text";

// 2. Selecting div for innerHTML (FIXED ID)
const innertext = document.getElementById("innertext");

// Adding HTML content dynamically
innertext.innerHTML = `
    <h1>This is inner HTML text</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum obcaecati voluptates quis eum atque! Magni, perspiciatis.
        Illo incidunt iste delectus sit labore magni fugiat laboriosam
        nostrum, ea quos. Quis, delectus?
    </p>
`;

// 3. Alert button click event (FIXED)
const alertbtn = document.getElementById("alertbtn");

alertbtn.addEventListener("click", () => {
    const name = "adam";
    alert(`${name}`);
});
