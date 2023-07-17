const inpEl = document.getElementById('validation-input');

inpEl.addEventListener('blur', function (event) {
    if (event.currentTarget.value.length === 6) {
        inpEl.classList.add('valid');
        inpEl.classList.remove('invalid');
    } else {
        inpEl.classList.add('invalid');
        inpEl.classList.remove('valid');
    }
});


