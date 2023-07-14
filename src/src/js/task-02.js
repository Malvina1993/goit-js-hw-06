const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');

const liEl = ingredients
  .map(ingr => ingr = `<li class="item">${ingr}</li>`)
  .join("");



ulEl.insertAdjacentHTML('afterbegin', liEl);


