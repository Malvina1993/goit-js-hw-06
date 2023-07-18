function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  divBoxEl: document.getElementById('boxes'),
  amount: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),

}

const fragment = document.createDocumentFragment();

ref.create.addEventListener('click', onCreateClick);
ref.destroy.addEventListener('click', onDestroyClick);

function onCreateClick(event) {
  event.preventdefault;
  createBoxes(ref.amount.value);

 
};


function createBoxes(amount) {
  
  if (amount === '') {
    alert('Get me amount!!!');
    return;
  }
  let width = 30;
  let height = 30;

  for (let i = ref.divBoxEl.children.length+1; i <= amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = width + (i-1)*10 + 'px';
    divEl.style.height = height + (i - 1) * 10 + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divEl);
  }

  ref.divBoxEl.append(fragment);
};




function onDestroyClick(event) {
  event.preventdefault;
  destroyBoxes();
};

function destroyBoxes() {
  if (ref.divBoxEl.innerHTML === '') {
    alert('No child found');
    return;
  }
  ref.divBoxEl.innerHTML='';
}