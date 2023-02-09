const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

ingredients.forEach((el) => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList = "item";
  ulEl.append(liEl);
})
