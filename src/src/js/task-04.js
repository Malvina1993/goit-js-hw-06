const spanEl = document.getElementById('value');
const btnDecrmnt = document.querySelector('[data-action="decrement"]');
const btnIncrmnt = document.querySelector('[data-action="increment"]');

btnDecrmnt.addEventListener('click', onBtnDecrmClick);
btnIncrmnt.addEventListener('click', onBtnIncrmClick);


let counterValue = 0;


function onBtnDecrmClick() {
    btnDecrmnt.textContent = Number(btnDecrmnt.textContent) - 1;
    counterValue -= 1;
    spanEl.textContent = counterValue;

}


function onBtnIncrmClick() {
    btnIncrmnt.textContent = '+' + (Number(btnIncrmnt.textContent) + 1);
    counterValue += 1;
    spanEl.textContent = counterValue;

}




