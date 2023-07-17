const inpEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inpEl.addEventListener('input', onInputElementInput);

function onInputElementInput(event) {
    spanEl.style.fontSize = event.currentTarget.value  + 'px';
};




