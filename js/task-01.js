const listArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${listArray.length}`);

const categoryAndSum = listArray.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
