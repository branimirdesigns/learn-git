// Test connection
console.log("External JS file is connected!");

// Example: Change heading color when clicked
const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
    heading.style.color = "blue";
    alert("Heading clicked!");
});