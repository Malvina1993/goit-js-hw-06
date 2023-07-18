const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients');

const fragment = document.createDocumentFragment(); 

for (const elem of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = `${elem}`;
  liEl.classList.add('item');
  fragment.appendChild(liEl);
}

ulEl.append(fragment);




