const inpData = document.getElementById('name-input');
const spanName = document.getElementById('name-output');

inpData.addEventListener('input', onInputDataInput);

function onInputDataInput(event) {
    if (event.currentTarget.value === '') {
        spanName.textContent = 'Anonymous';
    } else {
        spanName.textContent = event.currentTarget.value; 
    };
};


