
const formEl = document.querySelector('.login-form');
const inpEmail = document.querySelector('[type="email"]');
const inpPassword = document.querySelector('[type="password"]');
// const btnForm = document.querySelector('[type="submit"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if ((event.currentTarget.elements.email.value === "")||(event.currentTarget.elements.password.value === "")) {
         alert('All fields must be filled');
    } else {
        const formDate = {
            email: `${event.currentTarget.elements.email.value}`,
            password: `${event.currentTarget.elements.password.value}`,
        };
        console.log(formDate);
        formEl.reset();

    }


};


