const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

range()

input.addEventListener("input", range);
 
function range(event) {
    const fontSize = input.value
    span.style.fontSize= `${fontSize}px`
}