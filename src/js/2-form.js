import iziToast from 'izitoast';

const formEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

function loadSavedData() {
  try {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedData === null) {
      return;
    }

    const savedDataKeys = Object.keys(savedData);

    savedDataKeys.forEach(key => {
      formEl.elements[key].value = savedData[key];
      formData[key] = savedData[key];
    });
  } catch (error) {
    console.log(error);
  }
}

loadSavedData();

function onFormInput(event) {
  const formField = event.target;
  const fieldName = formField.name;
  const fieldValue = formField.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    iziToast.error({
      title: 'Error',
      message: 'Fill please all fields',
      position: 'topRight',
      progressBarColor: 'rgb(197, 9, 9)',
      messageColor: 'rgb(36, 7, 7)',
    });
    return;
  }

  console.log(formData);
  formData = { email: '', message: '' };

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);
