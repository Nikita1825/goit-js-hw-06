const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.getElementById("ingredients");
const items = ingredients.map(ingredient => {
  const ulLi = document.createElement("li");
  ulLi.textContent = ingredient;
  ulLi.classList.add("item");
  return ulLi
});
ingredientsUl.append(...items);