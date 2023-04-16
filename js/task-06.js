const input = document.getElementById("validation-input");
 const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", addVal);

function addVal(event) {
    const value = event.target.value.length;
    if (Number(dataLength) === value) {
        input.classList.add("valid")
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}


