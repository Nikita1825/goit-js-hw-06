
const categories = document.getElementById("categories"); 



const ulCategory = [...categories.children];
console.log(`Number of categories: ${ulCategory.length}`);

ulCategory.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
     console.log(`Elements: ${element.lastElementChild.children.length}`);

});