const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.createElement("ul");
for (const ingredient of ingredients) {
  const ulLi = document.createElement("li");
  ulLi.textContent = ingredient;
  ulLi.classList.add("item");
  ingredientsUl.appendChild(ulLi)
}
console.log(ingredientsUl);