const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", curr)
function curr(event) {
    const inputValue = event.currentTarget.value;
   span.textContent = inputValue ? inputValue : "Anonymous";
}
