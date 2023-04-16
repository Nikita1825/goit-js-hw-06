
const categories = document.getElementById("categories"); 

const categoriesTitle = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesTitle.length}`);

 categoriesTitle.forEach(element => {
     const title = element.querySelector("h2").textContent;
     console.log(`Category: ${title}`);

     const elemetnLi = element.querySelectorAll("li").length;
     console.log(`Elements: ${elemetnLi}`);
 });