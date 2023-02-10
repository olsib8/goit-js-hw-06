const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const items = ingredients.map((el) => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList = "item";
  return liEl;
  });
  
ulEl.append(...items);
