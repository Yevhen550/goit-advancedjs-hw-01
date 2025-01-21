const formEl = document.querySelector('.feedback-form');

let localStorData = {};

formEl.addEventListener('input', onFormInput);

function onFormInput(event) {
  const valueInput = event.target.value;

  localStorData = {
    email: valueInput,
  };
  console.log('🚀 => onFormInput => localStorData:', localStorData);

  localStorage.setItem('email', JSON.stringify(localStorData));
}

