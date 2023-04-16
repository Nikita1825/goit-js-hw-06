const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", range);

function range(event) {
    span.style.fontSize= `${event.target.value}px`
}